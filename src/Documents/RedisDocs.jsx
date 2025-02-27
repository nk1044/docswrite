import React from 'react';
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function RedisDocs() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex mb-3 items-center justify-center border-b border-neutral-700">
        <h1 className="text-4xl font-bold mb-2 text-neutral-300">Redis Documentation</h1>
      </div>

      <div className="mt-2 space-y-6">
        {/* Introduction */}
        <TextBlock
          heading="Introduction to Redis"
          id="redis-intro"
          Children={
            <Para 
              text="Redis is an in-memory data structure store, commonly used as a database, cache, and message broker. It offers high performance and supports data structures such as strings, hashes, lists, sets, and more. Discover more [link]Redis Official Website(https://redis.io)[/link]."
            />
          }
        />

        {/* Installation in Docker */}
        <TextBlock
          heading="Installing Redis in Docker"
          id="redis-installation"
          Children={
            <>
              <Para 
                text="To quickly set up Redis, you can run it in a Docker container. The command below pulls the latest Redis Stack image and runs it in detached mode:"
              />
              <CodeBlock 
                code={`docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest`}
                language="bash"
              />
              <Para 
                text="This command does the following:" 
              />
              <ListBlock
                title="Command Breakdown"
                items={[
                  "[code]-d[/code] runs the container in detached mode.",
                  "[code]--name redis-stack[/code] assigns the container the name 'redis-stack'.",
                  "[code]-p 6379:6379[/code] maps Redis' default port so clients can connect.",
                  "[code]-p 8001:8001[/code] maps an additional port for RedisInsight or admin tools.",
                  "[code]redis/redis-stack:latest[/code] specifies the image to be used."
                ]}
                ordered={true}
              />
            </>
          }
        />

        {/* Basic Docker Commands for Redis */}
        <TextBlock
          heading="Basic Redis Docker Commands"
          id="redis-basic-commands"
          Children={
            <>
              <Para 
                text="After installing Redis, manage your container using these commands:" 
              />
              <Table 
                header={['Command', 'Description']}
                rows={[
                  ['[code]docker ps[/code]', 'List running containers.'],
                  ['[code]docker logs redis-stack[/code]', 'View the logs of the Redis container.'],
                  ['[code]docker stop redis-stack[/code]', 'Stop the Redis container.'],
                  ['[code]docker start redis-stack[/code]', 'Start the Redis container if stopped.']
                ]}
              />
            </>
          }
        />

        {/* Connecting to Redis */}
        <TextBlock
          heading="Connecting to Redis"
          id="redis-connection"
          Children={
            <>
              <Para 
                text="To interact with your Redis instance, you can use the Redis CLI within the container. Execute the following command to open an interactive Redis shell:"
              />
              <CodeBlock 
                code={`docker exec -it redis-stack redis-cli`}
                language="bash"
              />
              <Para 
                text="Once connected, you can run commands like [code]PING[/code], [code]SET key value[/code], and [code]GET key[/code] to interact with the database." 
              />
              <ListBlock
                title="Common Redis CLI Commands"
                items={[
                  "[code]PING[/code] - Check connectivity.",
                  "[code]SET key value[/code] - Store a key-value pair.",
                  "[code]GET key[/code] - Retrieve the value for a key.",
                  "[code]DEL key[/code] - Delete a key."
                ]}
                ordered={false}
              />
            </>
          }
        />

        {/* Advanced Usage */}
        <TextBlock
          heading="Advanced Redis Docker Usage"
          id="redis-advanced"
          Children={
            <>
              <Para 
                text="For advanced scenarios, you may want to persist data or customize the Redis configuration. Here are some advanced commands and examples:"
              />
              <ListBlock
                title="Advanced Options"
                items={[
                  "Mount a volume to persist Redis data: [code]docker run -d --name redis-stack -v /my/local/path:/data -p 6379:6379 redis/redis-stack:latest[/code].",
                  "Run Redis with a custom configuration file by mounting it: [code]docker run -d --name redis-custom -v /path/to/redis.conf:/usr/local/etc/redis/redis.conf -p 6379:6379 redis/redis-stack:latest redis-server /usr/local/etc/redis/redis.conf[/code].",
                  "Enable Redis cluster mode for high availability in production environments."
                ]}
                ordered={true}
              />
              <CodeBlock 
                code={`# Example: Running Redis with a custom configuration\ndocker run -d --name redis-custom \\\n  -v /path/to/redis.conf:/usr/local/etc/redis/redis.conf \\\n  -p 6379:6379 \\\n  redis/redis-stack:latest redis-server /usr/local/etc/redis/redis.conf`}
                language="bash"
              />
            </>
          }
        />

        {/* Redis Best Practices */}
        <TextBlock
          heading="Redis Best Practices"
          id="redis-best-practices"
          Children={
            <>
              <Para 
                text="To maximize performance and ensure data integrity, follow these best practices:" 
              />
              <ListBlock
                title="Best Practices"
                items={[
                  "Persist data by mounting volumes to store Redis data outside the container.",
                  "Secure your Redis instance by configuring proper authentication and access controls.",
                  "Regularly monitor logs using [code]docker logs redis-stack[/code] and use [code]redis-cli[/code] for troubleshooting.",
                  "Backup your data regularly and test failover procedures."
                ]}
                ordered={true}
              />
            </>
          }
        />

        {/* Additional Resources */}
        <TextBlock
          heading="Additional Resources and References"
          id="redis-resources"
          Children={
            <>
              <Para 
                text="Learn more about Redis and its integration with Docker from the following resources:" 
              />
              <ListBlock
                title="Useful Links"
                items={[
                  "[link]Redis Official Website(https://redis.io)[/link]",
                  "[link]Redis Docker Hub(https://hub.docker.com/_/redis)[/link]",
                  "[link]Redis Stack Documentation(https://redis.io/docs/stack/overview/)[/link]"
                ]}
                ordered={false}
              />
            </>
          }
        />
      </div>
    </div>
  );
}

export default RedisDocs;
