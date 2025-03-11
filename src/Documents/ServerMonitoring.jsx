import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function ServerMonitoring() {
  return (
    <div className='w-full'>
      <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
        <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Monitoring with Grafana, Loki, and Prometheus</h1>
      </div>

      <div className='mt-2 space-y-6'>
        <TextBlock
          heading='Overview'
          id='server-monitoring-overview'
          Children={<>
            <Para text='Monitoring is essential for any application to track performance, detect issues, and analyze usage patterns. In this comprehensive guide, we will explore three powerful open-source tools for creating a complete monitoring stack: [bold]Prometheus, Grafana, and Loki[/bold].' />
            <Table
              headers={['Tool', 'Purpose', 'Key Features']}
              rows={[
                ['Prometheus', 'A time-series database and monitoring system that collects and stores metrics.', 'Pull-based architecture, powerful query language (PromQL), alerting capabilities'],
                ['Grafana', 'A visualization and analytics platform that displays metrics from different data sources.', 'Customizable dashboards, support for multiple data sources, alerting and notification features'],
                ['Loki', 'A horizontally-scalable, highly-available log aggregation system inspired by Prometheus.', 'Label-based indexing, works with existing logging tools, efficient storage']
              ]}
            />
            <Para text='Together, these tools form a powerful monitoring stack that provides visibility into your application and infrastructure performance, helping to identify issues before they impact users.' />
          </>}
        />

        <TextBlock
          heading='Why This Stack?'
          id='server-monitoring-why-this-stack'
          Children={<>
            <Para text='The Prometheus-Grafana-Loki stack has become an industry standard for monitoring for several reasons:' />
            <ListBlock
              title='Benefits of the stack:'
              items={[
                'Complete observability: Covers metrics (Prometheus), visualization (Grafana), and logs (Loki)',
                'Open-source: No licensing costs and backed by active communities',
                'Scalability: Designed to handle high-volume metrics and logs',
                'Cloud-native: Works seamlessly with containerized environments like Kubernetes',
                'Integration: All three tools work well together with minimal configuration'
              ]}
              ordered={false}
            />
          </>}
        />

        <TextBlock
          heading='Prerequisites'
          id='server-monitoring-prerequisites'
          Children={<>
            <ListBlock
              title='Before proceeding, ensure you have:'
              items={[
                'Basic knowledge of Node.js and Express Framework',
                'Familiarity with Docker and containerization concepts',
                'Basic understanding of monitoring and logging concepts',
                'Docker and Docker Compose installed on your system',
                'A Node.js application that you want to monitor'
              ]}
              ordered={false}
            />
            <Para text='This guide assumes you are using a Unix-based operating system (Linux or macOS). Windows users may need to adjust some commands accordingly.' />
          </>}
        />

        <TextBlock
          heading='Architecture Overview'
          id='server-monitoring-architecture-overview'
          Children={<>
            <Para text='The monitoring stack works together as follows:' />
            <ListBlock
              title='Data flow in the monitoring stack:'
              items={[
                'Your Node.js application exposes metrics via the /metrics endpoint',
                'Prometheus scrapes metrics from your application at regular intervals',
                'Your application sends logs to Loki',
                'Grafana queries both Prometheus and Loki to create dashboards',
                'Alerting rules in Prometheus or Grafana trigger notifications when conditions are met'
              ]}
              ordered={true}
            />
          </>}
        />

        <TextBlock
          heading='Setting up Prometheus Client in Node.js Server'
          id='server-monitoring-prometheus-client'
          Children={<>
            <Para text='Prometheus collects metrics from applications via an HTTP endpoint. To enable this in a Node.js application, first install the Prometheus client package:' />
            <CodeBlock code='npm install prom-client --save' language='bash' />
            <Para text='Then, integrate Prometheus in your Express server:' />
            <CodeBlock
              code={`import express from 'express';
import client from 'prom-client';

const app = express();
const PORT = process.env.PORT || 8000;

// Initialize the Prometheus registry
const register = new client.Registry();

// Add default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({ register });

// Expose metrics endpoint for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  // Set the correct content type header
  res.setHeader('Content-Type', register.contentType);
  
  // Get all metrics from the registry
  const metrics = await register.metrics();
  
  // Send metrics as response
  res.send(metrics);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT} with metrics available at /metrics\`);
});`}
              language='javascript'
            />
            <Para text='This code sets up a basic Express server with the following components:' />
            <ListBlock
              title='Code explanation:'
              items={[
                'A new Prometheus Registry is created to collect and expose metrics',
                'collectDefaultMetrics() adds system metrics like CPU and memory usage',
                'A dedicated /metrics endpoint returns all collected metrics in Prometheus format',
                'Content-Type header is set correctly to ensure Prometheus can parse the response'
              ]}
              ordered={false}
            />
            <Para text='When you access [code]http://localhost:8000/metrics[/code], you will see output similar to:' />
            <CodeBlock
              code={`# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 0.029716 1615472821399

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total 0.0132 1615472821399

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 33259520 1615472821399`}
              language='plaintext'
            />
            <Para text='This raw metrics output follows the Prometheus exposition format, with each metric having a help text, type definition, and value with timestamp.' />
          </>}
        />

        <TextBlock
          heading='Defining Custom Metrics in Prometheus'
          id='server-monitoring-prometheus-custom-metrics'
          Children={<>
            <Para text='While default metrics are useful, custom metrics allow you to track application-specific information. Here is how to define and use custom metrics:' />
            <CodeBlock
              code={`import express from 'express';
import client from 'prom-client';

const app = express();
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Create a counter for total HTTP requests
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});

// Create a histogram for request duration
const requestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10], // in seconds
  registers: [register]
});

// Create a gauge for active connections
const activeConnections = new client.Gauge({
  name: 'active_connections',
  help: 'Number of active connections',
  registers: [register]
});

// Middleware to track metrics for all requests
app.use((req, res, next) => {
  // Increment active connections
  activeConnections.inc();
  
  // Start the timer
  const end = requestDuration.startTimer();
  
  // Add a listener for when the response finishes
  res.on('finish', () => {
    // Add labels to the metrics
    const labels = { 
      method: req.method, 
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode
    };
    
    // Increment the request counter with labels
    httpRequestCounter.inc(labels);
    
    // End the timer and add the same labels
    end(labels);
    
    // Decrement active connections
    activeConnections.dec();
  });
  
  next();
});

// Sample routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  // Simulate API response
  setTimeout(() => {
    res.json([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]);
  }, 100);
});

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});`}
              language='javascript'
            />
            <Para text='This enhanced example demonstrates several types of custom metrics:' />
            <ListBlock
              title='Metrics explanation:'
              items={[
                '[bold]Counter (httpRequestCounter)[/bold]: Counts the total number of HTTP requests, with labels for HTTP method, route, and status code. Counters only increase and are useful for tracking things like total requests, errors, or completed tasks.',
                '[bold]Histogram (requestDuration)[/bold]: Measures the distribution of request durations across predefined buckets. This helps analyze response time percentiles (e.g., 95th percentile) and service level objectives (SLOs).',
                '[bold]Gauge (activeConnections)[/bold]: Represents a value that can go up and down, like current memory usage or active connections. In this example, we increment when a request starts and decrement when it finishes.'
              ]}
              ordered={false}
            />
            <Para text='The middleware captures metrics for every request, enabling you to analyze:' />
            <ListBlock
              title='Analysis possibilities:'
              items={[
                'Request volume by endpoint',
                'Error rates by status code',
                'Response time distribution',
                'Concurrent connections'
              ]}
              ordered={false}
            />
            <Para text='Example PromQL queries for these metrics:' />
            <CodeBlock
              code={`# Request rate per second over the last 5 minutes
rate(http_requests_total[5m])

# 95th percentile request duration
histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))

# Error rate (non-2xx responses)
sum(rate(http_requests_total{status_code=~"[45].."}[5m])) / sum(rate(http_requests_total[5m]))

# Current active connections
active_connections`}
              language='promql'
            />
          </>}
        />

        <TextBlock
          heading='Setting up Prometheus Server'
          id='server-monitoring-setup-prometheus-server'
          Children={<>
            <Para text='Now that your application exposes metrics, you need to set up Prometheus to scrape and store them. Start by creating a configuration file named [code]prometheus-config.yml[/code]:' />
            <CodeBlock
              code={`global:
  scrape_interval: 15s  # How frequently to scrape targets
  evaluation_interval: 15s  # How frequently to evaluate rules

# Rules for alerting and recording
rule_files:
  # - "alert_rules.yml"

# Scrape configurations
scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ["<NODEJS_SERVER_ADDRESS>"] # Replace with your Node.js server address (e.g., host.docker.internal:8000, http://172.31.2.2:8000)`}
              language='yaml'
            />
            <Para text='The configuration specifies:' />
            <ListBlock
              title='Configuration details:'
              items={[
                '[bold]scrape_interval[/bold]: How often Prometheus will fetch metrics from targets (15 seconds)',
                '[bold]evaluation_interval[/bold]: How often Prometheus will evaluate alerting rules',
                '[bold]job_name[/bold]: A logical name for each group of targets',
                '[bold]targets[/bold]: The endpoints to scrape metrics from'
              ]}
              ordered={false}
            />
            <Para text={`Note: [code]host.docker.internal[/code] is used to access the host machine from within Docker containers on macOS and Windows. On Linux, you might need to use the host\'s IP address or configure Docker networks properly.`} />
            <Para text='Now create a Docker Compose configuration to run Prometheus:' />
            <CodeBlock
              code={`version: "3"

services:
  prom-server:
    image: prom/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus-config.yml:/etc/prometheus/prometheus.yml`}
              language='yaml'
            />
            <Para text='This Docker Compose file:' />
            <ListBlock
              title='Docker Compose explanation:'
              items={[
                'Uses the official Prometheus Docker image',
                'Maps port 9090 for the web interface',
                'Mounts your configuration file into the container',
                'Creates a persistent volume for stored metrics',
                'Enables runtime reloading of configuration',
                'Ensures the container restarts automatically'
              ]}
              ordered={false}
            />
            <Para text='Start Prometheus using Docker Compose:' />
            <CodeBlock
              code={`docker-compose up -d prometheus`}
              language='bash'
            />
            <Para text='Once running, access the Prometheus web UI at [code]http://localhost:9090[/code]. You can use the UI to:' />
            <ListBlock
              title='Prometheus UI features:'
              items={[
                'Execute PromQL queries in the "Graph" tab',
                'View all configured targets in the "Status > Targets" section',
                'Check the configuration in "Status > Configuration"',
                'View all collected metrics in "Status > Targets" by clicking on an endpoint'
              ]}
              ordered={false}
            />
            <Para text='To verify that Prometheus is scraping your application, check the "Status > Targets" page. Your Node.js application should be listed as "Up".' />
          </>}
        />

        <TextBlock
          heading='Setting up Grafana'
          id='server-monitoring-setup-grafana'
          Children={<>
            <Para text='Grafana provides a powerful visualization layer for your metrics. Add it to your Docker Compose file:' />
            <CodeBlock
              code={`version: '3'

services:
  prometheus:
    # (Previous Prometheus configuration)

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    volumes:
      - grafana_data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin  # Change in production
      - GF_USERS_ALLOW_SIGN_UP=false
    depends_on:
      - prometheus
    restart: unless-stopped

volumes:
  prometheus_data: {}
  grafana_data: {}`}
              language='yaml'
            />
            <Para text='Start Grafana along with Prometheus:' />
            <CodeBlock
              code={`docker-compose up -d`}
              language='bash'
            />
            <Para text='or run grafana saperatly' />
            <CodeBlock
              code={`docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss`}
              language='bash'
            />
            <Para text='Access Grafana at [code]http://localhost:3000[/code] and log in with the credentials specified in the Docker Compose file (default: admin/admin).' />
            <Para text='To configure Grafana to use Prometheus as a data source:' />
            <ListBlock
              title='Grafana setup steps:'
              items={[
                'Go to Configuration > Data Sources',
                'Click "Add data source" and select "Prometheus"',
                'Set the URL to "http://prometheus:9090" (using the service name from Docker Compose)',
                'Click "Save & Test" to verify the connection'
              ]}
              ordered={true}
            />
            <Para text='Now create a dashboard to visualize your Node.js application metrics:' />
            <ListBlock
              title='Dashboard creation steps:'
              items={[
                'Click "+ Create Dashboard"',
                'Click "Add new panel"',
                'In the query editor, enter a PromQL query like: [code]rate(http_requests_total[5m])[/code]',
                'Set visualization options (Graph, Bar chart, etc.)',
                'Add a title and description',
                'Save the dashboard'
              ]}
              ordered={true}
            />
            <Para text='Example dashboard panels for a Node.js application:' />
            <ListBlock
              title='Useful dashboard panels:'
              items={[
                '[bold]Request Rate[/bold]: [code]sum(rate(http_requests_total[1m])) by (route)[/code]',
                '[bold]Error Rate[/bold]: [code]sum(rate(http_requests_total{status_code=~"[45].."}[1m])) / sum(rate(http_requests_total[1m]))[/code]',
                '[bold]Response Time (P95)[/bold]: [code]histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))[/code]',
                '[bold]Active Connections[/bold]: [code]active_connections[/code]',
                '[bold]Memory Usage[/bold]: [code]process_resident_memory_bytes[/code]',
                '[bold]CPU Usage[/bold]: [code]rate(process_cpu_user_seconds_total[1m])[/code]'
              ]}
              ordered={false}
            />
            <img src="/grafanaDashBoard.png" loading='lazy' alt="grafana Dashboard" />
          </>}
        />

        <TextBlock
          heading='Setting up Loki and Log Monitoring'
          id='server-monitoring-setup-loki'
          Children={<>
            <Para text='Loki complements Prometheus by providing log aggregation. Add it to your Docker Compose file:' />
            <CodeBlock
              code={`version: '3'

services:
  prometheus:
    # (Previous Prometheus configuration)

  grafana:
    # (Previous Grafana configuration)

  loki:
    image: grafana/loki:latest
    container_name: loki
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml
    volumes:
      - loki_data:/loki
    restart: unless-stopped

volumes:
  prometheus_data: {}
  grafana_data: {}
  loki_data: {}`}
              language='yaml'
            />
            <Para text='Start the updated stack:' />
            <CodeBlock
              code={`docker-compose up -d`}
              language='bash'
            />
            <Para text='or run loki saperatly' />
            <CodeBlock
              code={`docker run -d --name=loki -p 3100:3100 grafana/loki`}
              language='bash'
            />
            <Para text='For logging in Node.js, use [code]winston[/code] and [code]winston-loki[/code] to send logs to Loki:' />
            <CodeBlock
              code={`npm install winston winston-loki --save`}
              language='bash'
            />
            <Para text='Configure Winston with Loki in your Node.js application:' />
            <CodeBlock
              code={`import winston from 'winston';
import LokiTransport from 'winston-loki';

// Define log format
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ level, message, timestamp, ...metadata }) => {
    return \`\${timestamp} [\${level}]: \${message} \${Object.keys(metadata).length ? 
      JSON.stringify(metadata) : ''}\`;
  })
);

// Create logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  defaultMeta: { service: 'node-app' },
  transports: [
    // Console transport for local development
    new winston.transports.Console({
      format: consoleFormat
    }),
    
    // Loki transport for centralized logging
    new LokiTransport({
      host: 'http://localhost:3100',  // For local development
      // host: 'http://loki:3100',    // For Docker Compose
      batching: true,
      interval: 5,  // seconds
      clearOnError: false,
      labels: {
        job: 'nodejs',
        app: 'example-app',
        environment: process.env.NODE_ENV || 'development'
      }
    })
  ]
});

// Example usage
logger.info('Application started');
logger.warn('Resource usage high', { memory: process.memoryUsage().heapUsed });
logger.error('Database connection failed', { 
  error: 'Connection timeout', 
  database: 'users',
  retryAttempt: 3
});

// In request handlers
app.get('/api/users', (req, res) => {
  logger.info('User request received', { 
    userId: req.query.id,
    ip: req.ip,
    userAgent: req.headers['user-agent']
  });
  
  // Your handler code...
  
  logger.debug('Query executed', { query: 'SELECT * FROM users', duration: 15 });
  
  res.json([{ id: 1, name: 'User' }]);
});

// Error middleware
app.use((err, req, res, next) => {
  logger.error('Request error', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });
  
  res.status(500).json({ error: 'Internal server error' });
});`}
              language='javascript'
            />
            <Para text='This logging setup:' />
            <ListBlock
              title='Logging features:'
              items={[
                'Creates a Winston logger with both console and Loki transports',
                'Formats logs with timestamps and colors for local development',
                'Adds service and environment labels to all logs',
                'Batches logs to reduce network overhead',
                'Provides examples for different log levels and structured logging',
                'Demonstrates logging in request handlers and error middleware'
              ]}
              ordered={false}
            />
            <Para text='Configure Loki as a data source in Grafana:' />
            <ListBlock
              title='Loki data source configuration:'
              items={[
                'Go to Configuration > Data Sources in Grafana',
                'Click "Add data source" and select "Loki"',
                'Set the URL to "http://loki:3100" (using the service name from Docker Compose)',
                'Click "Save & Test" to verify the connection'
              ]}
              ordered={true}
            />
            <Para text='To query logs in Grafana:' />
            <ListBlock
              title='Log query examples:'
              items={[
                '[bold]All logs for the application[/bold]: [code]{job="nodejs"}[/code]',
                '[bold]Error logs only[/bold]: [code]{job="nodejs"} |= "error"[/code]',
                '[bold]Logs for a specific API endpoint[/bold]: [code]{job="nodejs"} |= "/api/users"[/code]',
                '[bold]Logs with high memory usage warning[/bold]: [code]{job="nodejs"} |= "Resource usage high"[/code]'
              ]}
              ordered={false}
            />
          </>}
        />

        <TextBlock
          heading='Creating Unified Dashboards'
          id='server-monitoring-unified-dashboards'
          Children={<>
            <Para text='One of the key benefits of this monitoring stack is the ability to create dashboards that combine metrics and logs for a complete view of your application.' />
            <Para text='To create a unified dashboard in Grafana:' />
            <ListBlock
              title='Steps for unified dashboards:'
              items={[
                'Create a new dashboard',
                'Add panels with Prometheus queries for metrics',
                'Add panels with Loki queries for logs',
                'Use variables to filter both metrics and logs by the same criteria',
                'Arrange panels logically to show correlations between metrics and logs'
              ]}
              ordered={true}
            />
            <Para text='Example dashboard layout:' />
            <ListBlock
              title='Dashboard sections:'
              items={[
                '[bold]Application Overview[/bold]: Request rate, error rate, response time metrics',
                '[bold]System Resources[/bold]: CPU, memory, and network metrics',
                '[bold]Error Tracking[/bold]: Error rate graph with related error logs below',
                '[bold]Performance Insights[/bold]: Slow requests with corresponding database query logs',
                '[bold]User Activity[/bold]: User session metrics with authentication logs'
              ]}
              ordered={false}
            />
          </>}
        />

        <TextBlock
          heading='Setting Up Alerts'
          id='server-monitoring-alerts'
          Children={<>
            <Para text='Monitoring is most valuable when it can proactively notify you of issues. Both Prometheus and Grafana offer alerting capabilities.' />
            <Para text='To set up Prometheus alerting:' />
            <CodeBlock
              code={`# alert_rules.yml
groups:
  - name: node_app_alerts
    rules:
      - alert: HighErrorRate
        expr: sum(rate(http_requests_total{status_code=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) > 0.05
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value | humanizePercentage }} for the past 5 minutes"
          
      - alert: SlowResponseTime
        expr: histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le)) > 0.5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Slow response time detected"
          description: "95th percentile of response time is {{ $value | humanizeDuration }} for the past 5 minutes"`}
              language='yaml'
            />
            <Para text='Update your Prometheus configuration to include these rules:' />
            <CodeBlock
              code={`global:
  scrape_interval: 15s
  evaluation_interval: 15s

# Rules for alerting and recording
rule_files:
  - "alert_rules.yml"  # Add this line

# Rest of your configuration...`}
              language='yaml'
            />
            <Para text='For Grafana alerts:' />
            <ListBlock
              title='Grafana alert setup:'
              items={[
                'Open a dashboard and edit a panel',
                'Go to the "Alert" tab',
                'Define alert conditions (e.g., "Is above 0.5")',
                'Set evaluation frequency and condition period',
                'Configure notifications (email, Slack, etc.)',
                'Save the alert'
              ]}
              ordered={true}
            />
          </>}
        />

        <TextBlock
          heading='Best Practices'
          id='server-monitoring-best-practices'
          Children={<>
            <Para text='To get the most out of your monitoring stack:' />
            <ListBlock
              title='Monitoring best practices:'
              items={[
                '[bold]Use consistent labels[/bold]: Apply the same labels across metrics and logs for easier correlation',
                '[bold]Follow the RED method[/bold]: Monitor Rate (requests/second), Errors (failed requests), and Duration (response time) for each service',
                '[bold]Follow the USE method[/bold]: Monitor Utilization, Saturation, and Errors for resources like CPU, memory, and disks',
                '[bold]Set up alerting[/bold]: Configure alerts for critical conditions with appropriate thresholds',
                '[bold]Implement SLOs[/bold]: Define Service Level Objectives and track them',
                '[bold]Retain metrics appropriately[/bold]: Configure retention periods based on your needs and storage capacity',
                '[bold]Secure your monitoring stack[/bold]: Use authentication, HTTPS, and network isolation'
              ]}
              ordered={false}
            />
          </>}
        />

        <TextBlock
          heading='Troubleshooting'
          id='server-monitoring-troubleshooting'
          Children={<>
            <Para text='Common issues and solutions:' />
            <ListBlock
              title='Troubleshooting tips:'
              items={[
                '[bold]Prometheus cannot scrape targets[/bold]: Check network connectivity, firewall rules, and target availability',
                '[bold]No data in Grafana[/bold]: Verify data source configuration and PromQL queries',
                '[bold]High cardinality issues[/bold]: Limit the number of unique label combinations to prevent performance problems',
                '[bold]Loki not receiving logs[/bold]: Check network connectivity and logger configuration',
                '[bold]Out of memory errors[/bold]: Adjust resource limits in Docker Compose or reduce data retention'
              ]}
              ordered={false}
            />
          </>}
        />
        <TextBlock
          heading='Advanced Topics'
          id='server-monitoring-advanced-topics'
          Children={<>
            <Para text='Once you have the basic stack running, consider these advanced topics:' />
            <ListBlock
              title='Advanced monitoring features:'
              items={[
                '[bold]Federation[/bold]: Scale Prometheus by implementing hierarchical scraping',
                '[bold]High Availability[/bold]: Set up redundant monitoring components',
                '[bold]Remote storage[/bold]: Use long-term storage solutions for metrics',
                '[bold]Service discovery[/bold]: Automatically discover and monitor new services',
                '[bold]Custom exporters[/bold]: Create exporters for services that don\'t expose Prometheus metrics',
                '[bold]Distributed tracing[/bold]: Add Tempo or Jaeger to complete your observability stack'
              ]}
              ordered={false}
            />
          </>}
        />

        <TextBlock
          heading='Setting up Grafana-Prometheus-Loki Stack without Docker'
          id='server-monitoring-prometheus-local'
          Children={<>
            <Para text='Follow these steps to install and configure Grafana, Prometheus, and Loki without using Docker.' />

            <Para text='[bold]Step 1: Install Required Dependencies[/bold]' />
            <CodeBlock code='sudo apt-get install -y apt-transport-https
sudo apt-get install -y software-properties-common wget
sudo wget -q -O /usr/share/keyrings/grafana.key https://apt.grafana.com/gpg.key' language='bash' />

            <Para text='[bold]Step 2: Setup the Stable Version of Grafana[/bold]' />
            <CodeBlock code='echo "deb [signed-by=/usr/share/keyrings/grafana.key] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list' language='bash' />

            <Para text='[bold]Step 3: Update and Install Grafana[/bold]' />
            <CodeBlock code='# Update the list of available packages
sudo apt-get update

# Install the latest OSS release:
sudo apt-get install grafana' language='bash' />

            <Para text='[bold]Step 4: Start Grafana Server[/bold]' />
            <CodeBlock code='#To start Grafana Server
sudo /bin/systemctl status grafana-server

sudo /bin/systemctl enable grafana-server
' language='bash' />

            <Para text='[bold]Step 5: Install Loki and Promtail[/bold]' />
            <Para text='Make a folder for loki-promtail files and download Loki and Promtail configuration files before running the containers.' />

            <CodeBlock code='wget https://raw.githubusercontent.com/grafana/loki/v2.8.0/cmd/loki/loki-local-config.yaml -O loki-config.yaml' language='bash' />

            <CodeBlock code='wget https://raw.githubusercontent.com/grafana/loki/v2.8.0/cmd/promtail/promtail-local-config.yaml -O promtail-config.yaml' language='bash' />

            <Para text='[bold]Step 6: Run Loki and Promtail Containers[/bold]' />
            <CodeBlock code='docker run -d --name loki -v $(pwd):/mnt/config -p 3100:3100 grafana/loki:2.8.0 --config.file=/mnt/config/loki-config.yaml' language='bash' />

            <CodeBlock code='docker run -d --name promtail -v $(pwd):/mnt/config -v /var/log:/var/log --link loki grafana/promtail:2.8.0 --config.file=/mnt/config/promtail-config.yaml' language='bash' />
            <Para text='[bold]Summary[/bold]: This guide covers the installation of Grafana, Loki, and Promtail on a local system without Docker. It ensures proper logging and monitoring using Prometheus. Grafana serves as the visualization tool, Loki as the log aggregation system, and Promtail as the log collector. These components work together to provide efficient system monitoring.' />

            <Table
              headers={['Component', 'Port', 'Description']}
              rows={[
                ['Grafana', '3000', 'Dashboard for visualization'],
                ['Loki', '3100', 'Log aggregation system'],
                ['Promtail', 'N/A', 'Log collector, forwards logs to Loki']
              ]}
            />
          </>}
        />


      </div>
    </div>
  );
}

export default ServerMonitoring;