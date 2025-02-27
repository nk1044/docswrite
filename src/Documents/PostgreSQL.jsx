import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function PostgreSQL() {
  return (
    <div className='w-full'>
      <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
        <h1 className='text-4xl font-bold mb-2 text-neutral-300'>PostgreSQL with Docker</h1>
      </div>

      <div className='mt-2 space-y-6'>
        <TextBlock
          heading='Introduction'
          id='intro'
          Children={
            <Para text='PostgreSQL is a powerful, open-source relational database. Docker allows us to run PostgreSQL in a containerized environment efficiently. This guide covers the installation, configuration, and useful commands to manage PostgreSQL with Docker.' />
          }
        />

        <TextBlock
          heading='Setting up PostgreSQL with Docker'
          id='setup'
          Children={
            <>
              <Para text='To install PostgreSQL in a Docker container, create a `docker-compose.yml` file with the following content:' />
              <CodeBlock
                code={`version: '3.8'
services:
  db:
    image: postgres:latest
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: TestDB
      POSTGRES_USER: TestUser
      POSTGRES_PASSWORD: TestUserPassword
    volumes:
      - ./data/db:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5
  adminer:
    image: adminer
    restart: always
    ports:
      - "8080:8080"`}
                language='yaml'
              />
              <Para text='Run the following command to start PostgreSQL:' />
              <CodeBlock code='docker-compose up -d' language='bash' />
            </>
          }
        />

        <TextBlock
          heading='Accessing PostgreSQL'
          id='access'
          Children={
            <>
              <Para text='Once the container is running, you can access PostgreSQL using the following connection URL:' />
              <CodeBlock code='postgresql://TestUser:TestUserPassword@localhost:5432/TestDB' language='plaintext' />
              <Para text='Alternatively, use the `psql` command inside the running container:' />
              <CodeBlock code='docker exec -it <container_id> psql -U TestUser -d TestDB' language='bash' />
            </>
          }
        />

        <TextBlock
          heading='Important PostgreSQL Commands'
          id='commands'
          Children={
            <>
              <ListBlock
                title='Basic Commands'
                items={[
                  '[code]CREATE DATABASE mydb;[/code] - Create a new database.',
                  '[code]DROP DATABASE mydb;[/code] - Delete a database.',
                  '[code]CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT);[/code] - Create a table.',
                  `[code]INSERT INTO users (name) VALUES ('John Doe');[/code] - Insert a record.`,
                  '[code]SELECT * FROM users;[/code] - Retrieve data.',
                ]}
                ordered={false}
              />
            </>
          }
        />

        <TextBlock
          heading='Stopping and Removing Containers'
          id='stop_remove'
          Children={
            <>
              <Para text='To stop and remove the running PostgreSQL container, use:' />
              <CodeBlock code='docker-compose down' language='bash' />
              <Para text='To remove volumes and associated data:' />
              <CodeBlock code='docker-compose down -v' language='bash' />
            </>
          }
        />
      </div>
    </div>
  );
}

export default PostgreSQL;
