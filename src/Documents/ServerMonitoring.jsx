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
          heading='Prerequisites'
          id='prerequisites'
          Children={<>
            <Para text='- Basic knowledge of Node.js and Express Framework.' />
            <Para text='- Basic to Intermediate knowledge in Docker and Containerization - [link]Learn Docker Containerization(https://learn.piyushgarg.dev/learn/docker)[/link].' />
          </>}
        />

        <TextBlock
          heading='Setting up Prometheus Client in Node.js Server'
          id='setup-prometheus-client'
          Children={<>
            <Para text='Install the Prometheus client package in your Node.js server:' />
            <CodeBlock code='npm i prom-client' language='bash' />
            <Para text='Import and configure the Prometheus client in your server:' />
            <CodeBlock
              code={`import client from 'prom-client';

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', client.register.contentType);
  const metrics = await client.register.metrics();
  res.send(metrics);
});`}
              language='javascript'
            />
            <Para text='This data at [code]http://localhost:port/metrics[/code] is not in a readable format.' />
          </>}
        />

        <TextBlock
          heading='Setting up Prometheus Server'
          id='setup-prometheus-server'
          Children={<>
            <Para text='Create a [code]prometheus-config.yml[/code] file with the following configuration. Replace [code]<NDOEJS_SERVER_ADDRESS>[/code] with the actual server address.' />
            <CodeBlock
              code={`global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ['<NDOEJS_SERVER_ADDRESS>']`}
              language='yaml'
            />
            <Para text='Start the Prometheus server using Docker Compose:' />
            <CodeBlock
              code={`version: '3'

services:
  prom-server:
    image: prom/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml`}
              language='yaml'
            />
            <Para text='Once running, the Prometheus server will be available at [code]http://localhost:9090[/code].' />
          </>}
        />

        <TextBlock
          heading='Setting up Grafana'
          id='setup-grafana'
          Children={<>
            <Para text='Run the following command to start Grafana using Docker:' />
            <CodeBlock code='docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss' language='bash' />
            <Para text='Grafana will be available at [code]http://localhost:3000[/code].' />
          </>}
        />

        <TextBlock
          heading='Setting up Loki Server'
          id='setup-loki-server'
          Children={<>
            <Para text='Run the following command to start the Loki server using Docker:' />
            <CodeBlock code='docker run -d --name=loki -p 3100:3100 grafana/loki' language='bash' />
          </>}
        />
      </div>
    </div>
  );
}

export default ServerMonitoring