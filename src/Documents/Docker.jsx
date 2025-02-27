import React from 'react';
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import {TextBlock} from '../Components/Sections/TextBlock';
import {Para} from '../Components/Sections/Para';
import {ListBlock} from '../Components/Sections/ListBlock';
import ExternalLink from '../Components/Sections/ExternalLink';

function Docker() {

    return (
        <div className='w-full'>

            <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
                <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Getting Started with Docker</h1>
            </div>
            <div className='mt-2 space-y-6'>
                {/* docker images */}
            <TextBlock 
                heading="Docker Images" 
                id="docker-images"
                Children={
                    <>
                    <Para 
                        text="To list available images, use [code]docker images[/code]. You can run an image in a container using [code]docker run -it &lt;image_name/id&gt;[/code]. If the image is not present locally, it will be pulled from Docker Hub. Learn more [link]here(https://docs.docker.com)[/link]." 
                    />

                    <CodeBlock 
                        code={`# List available images\ndocker images\n\n# Run an image in a container\ndocker run -it <image_name/id>\n\n# Run an image with port mapping\ndocker run -it -p 1025:1025 <image_name/id>`} 
                        language="bash"
                    />

                    <Table 
                        headers={["Option", "Description"]} 
                        rows={[
                        ["--name", "Set a custom name for the container"],
                        ["--rm", "Remove the container after use"],
                        ["-it", "Interactive mode"],
                        ["-d", "Detach mode (run in background)"],
                        ["-p host_port:container_port", "Port mapping between local machine and container"]
                        ]} 
                    />

                    <ListBlock 
                        title="Key Points about Images"
                        items={[
                        "A container is a running environment for an image.",
                        "-it enables an interactive terminal.",
                        "-d allows running in detached mode.",
                        "If the image is not found locally, Docker pulls it from Docker Hub.",
                        "-p flag is used for port mapping (host:container)."
                        ]}
                    />
                    </>
                }
                />

                {/* docker containers */}
            <TextBlock 
                heading="Docker Containers" 
                id="docker-containers"
                Children={
                    <>
                    <Para 
                        text="To list all running containers, use [code]docker container ls[/code] or [code]docker ps[/code]. To see all containers, including stopped ones, use [code]docker container ls -a[/code]. Learn more [link]here(https://docs.docker.com)[/link]." 
                    />

                    <CodeBlock 
                        code={`# List all running containers\ndocker container ls\n\ndocker ps\n\n# List all containers (running + stopped)\ndocker container ls -a\n\n# Start a container\ndocker start <container_name/id>\n\n# Stop a container\ndocker stop <container_name/id>\n\n# Execute a command inside a running container\ndocker exec <container_name/id> <command>`} 
                        language="bash"
                    />

                    <Table 
                        headers={["Command", "Description"]} 
                        rows={[
                        ["docker container ls", "Lists all running containers"],
                        ["docker ps", "Lists all running containers (alternative)"],
                        ["docker container ls -a", "Lists all containers (running + stopped)"],
                        ["docker start <container_name/id>", "Starts a stopped container"],
                        ["docker stop <container_name/id>", "Stops a running container"],
                        ["docker exec <container_name/id> <command>", "Executes a command inside a running container"]
                        ]} 
                    />

                    <ListBlock 
                        title="Key Points about Containers"
                        items={[
                        "Containers are instances of images running in isolated environments.",
                        "Use `docker start` and `docker stop` to manage container states.",
                        "`docker exec` allows running commands inside a running container.",
                        "`docker container ls -a` shows both running and stopped containers.",
                        "`docker ps` is a shortcut for listing active containers."
                        ]}
                    />
                    </>
                }
                />
                {/* Volume, Port Mapping, Environment Variables */}
            <TextBlock 
            heading="Port Mapping, Environment Variables, and Docker Volumes" 
            id="docker-port-env-volume"
            Children={
                <>
                <Para 
                    text="When running a container, we can map ports, set environment variables, and use volumes for persistent data storage. These features enhance container functionality and interaction with the host system. Learn more [link]here(https://docs.docker.com)[/link]." 
                />

                <CodeBlock 
                    code={`# Port Mapping\ndocker run -it -p 1025:1025 <image_name/id>\n\n# Environment Variables\ndocker run -it -e key=value <image_name/id>\n\n# Docker Volume (Persistent Storage)\ndocker run -it -v <volume_name>:<path_in_workdir> <image_name>\n\n# Bind Mount (Local Machine to Container)\ndocker run -it -v <local_machine_path>:<path_in_workdir> <image_name>`} 
                    language="bash"
                />

                <Table 
                    headers={["Feature", "Command", "Description"]} 
                    rows={[
                    ["Port Mapping", "docker run -p 1025:1025 <image>", "Maps port 1025 of host machine to container"],
                    ["Environment Variable", "docker run -e key=value <image>", "Sets an environment variable in the container"],
                    ["Docker Volume", "docker run -v <volume_name>:<path>", "Creates a persistent volume inside the container"],
                    ["Bind Mount", "docker run -v <local_path>:<container_path> <image>", "Maps a local machine folder to a container directory"]
                    ]} 
                />

                <ListBlock 
                    title="Understanding Port Mapping"
                    items={[
                    "Port mapping allows external access to container services.",
                    "`-p local_port:container_port` binds a container's port to the host.",
                    "Example: `-p 8080:80` makes a containerized web server accessible on `localhost:8080`."
                    ]}
                />

                <ListBlock 
                    title="Understanding Environment Variables"
                    items={[
                    "Use `-e key=value` to pass variables into a container.",
                    "This is useful for setting configurations dynamically.",
                    "Example: `docker run -e DB_HOST=localhost -e DB_USER=root <image>`."
                    ]}
                />

                <ListBlock 
                    title="Understanding Docker Volumes"
                    items={[
                    "Docker volumes persist data beyond container lifetimes.",
                    "Use `docker volume create <volume_name>` to create a volume.",
                    "Example: `docker run -v mydata:/data <image>` stores data in `mydata` volume.",
                    "Volumes are managed by Docker and stored in `/var/lib/docker/volumes`."
                    ]}
                />

                <ListBlock 
                    title="Understanding Bind Mounts"
                    items={[
                    "Bind mounts link a local machine directory to a container directory.",
                    "Useful for real-time file updates without rebuilding the image.",
                    "Example: `docker run -v ~/app:/usr/src/app <image>` makes `~/app` accessible inside the container.",
                    "Unlike volumes, bind mounts directly map to local filesystem paths."
                    ]}
                />

                <CodeBlock 
                    code={`# Example of a Dockerfile using Volumes\nFROM ubuntu\nRUN mkdir /myvol\nRUN echo "hello world" > /myvol/greeting\nVOLUME /myvol`} 
                    language="dockerfile"
                />
                </>
            }
            />

            {/* Networking */}

            <TextBlock 
                heading="Docker Networking" 
                id="docker-networking"
                Children={
                    <>
                    <Para 
                        text="Docker provides different networking options to facilitate communication between containers and external networks. The primary network types are **bridge**, **host**, and **none**. Learn more [link]here(https://docs.docker.com/network/)[/link]." 
                    />

                    <Table 
                        headers={["Network Type", "Description"]} 
                        rows={[
                        ["Bridge", "Default network mode; isolates containers but allows inter-container communication using container names."],
                        ["Host", "Containers share the host machine's network, eliminating the need for port mapping."],
                        ["None", "Disables networking for the container, isolating it completely."]
                        ]} 
                    />

                    <ListBlock 
                        title="Basic Docker Network Commands"
                        items={[
                        "`docker network --help` - Displays help for network management.",
                        "`docker network ls` - Lists all available networks.",
                        "`docker network create <network_name>` - Creates a new user-defined network.",
                        "`docker network inspect <network_name>` - Displays detailed network information.",
                        "`docker network rm <network_name>` - Removes a network."
                        ]}
                    />

                    <CodeBlock 
                        code={`# Create a new Docker network\ndocker network create my_network\n\n# List available networks\ndocker network ls\n\n# Inspect a network\ndocker network inspect my_network`} 
                        language="bash"
                    />

                    <ListBlock 
                        title="Connecting Containers to a Network"
                        items={[
                        "By default, containers use the `bridge` network.",
                        "To specify a network when running a container, use `--network <network_name>`.",
                        "Containers within the same custom network can communicate using their names instead of IP addresses."
                        ]}
                    />

                    <CodeBlock 
                        code={`# Run a container in a specific network\ndocker run -it --network my_network ubuntu bash\n\n# Connect an existing container to a network\ndocker network connect my_network <container_name/id>\n\n# Disconnect a container from a network\ndocker network disconnect my_network <container_name/id>`} 
                        language="bash"
                    />

                    <ListBlock 
                        title="Host Networking Mode"
                        items={[
                        "Using `--network host` allows the container to share the host's network stack.",
                        "This removes the need for port mapping but might cause conflicts with existing services.",
                        "Example: `docker run -it --network host nginx` runs an Nginx container using the host’s network."
                        ]}
                    />

                    <ListBlock 
                        title="Bridge Networking Mode"
                        items={[
                        "Bridge networks allow controlled communication between containers.",
                        "Each container gets its own virtual IP address.",
                        "Example: Two containers in the same bridge network can communicate via container names."
                        ]}
                    />

                    <CodeBlock 
                        code={`# Create a bridge network\ndocker network create my_bridge\n\n# Run two containers in the same network\ndocker run -it --network my_bridge --name container1 ubuntu bash\ndocker run -it --network my_bridge --name container2 ubuntu bash\n\n# Inside container1, ping container2\nping container2`} 
                        language="bash"
                    />

                    <ListBlock 
                        title="None Networking Mode"
                        items={[
                        "Using `--network none` isolates the container completely from any network.",
                        "This is useful for security-sensitive applications.",
                        "Example: `docker run -it --network none ubuntu bash` creates a container without networking."
                        ]}
                    />
                    </>
                }
                />
            
                {/* Multiple */}
                <TextBlock 
                    heading="Working with Multiple Containers & Pushing Images to Docker Hub" 
                    id="docker-multi-containers"
                    Children={
                        <>
                        <Para 
                            text="When working with multiple containers, we need to set up a network or use container IP addresses for communication. Additionally, we can push images to Docker Hub for easy sharing and deployment. Learn more [link]here(https://docs.docker.com/)[/link]." 
                        />

                        <ListBlock 
                            title="Managing Multiple Containers"
                            items={[
                            "Each container has a unique IP address that can be found using `docker inspect <container_name>`.",
                            "Containers within the same network can communicate using their names instead of IP addresses.",
                            "A user-defined network is recommended for multiple containers to enable easy communication.",
                            "Use `docker-compose` to define and manage multi-container applications."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Inspect a container to get its IP address\ndocker inspect <container_name> | grep \"IPAddress\"`} 
                            language="bash"
                        />

                        <ListBlock 
                            title="Connecting Multiple Containers"
                            items={[
                            "Use `docker network create <network_name>` to create a custom network.",
                            "Run containers in the same network using `--network <network_name>`.",
                            "Containers in the same network can communicate using their names instead of IPs."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Create a user-defined network\ndocker network create my_network\n\n# Run two containers in the same network\ndocker run -it --network my_network --name container1 ubuntu bash\ndocker run -it --network my_network --name container2 ubuntu bash\n\n# Inside container1, we can communicate with container2 using its name\nping container2`} 
                            language="bash"
                        />

                        <ListBlock 
                            title="Pushing an Image to Docker Hub"
                            items={[
                            "To share an image, we must first push it to Docker Hub.",
                            "Create a repository on [Docker Hub](https://hub.docker.com/).",
                            "Ensure the image name follows the format `<dockerhub_username>/<image_name>`.",
                            "Login to Docker Hub using `docker login` before pushing an image."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Login to Docker Hub\ndocker login\n\n# Build an image with a tag matching your repository name\ndocker build -t myusername/myimage .\n\n# Verify that the image is built\ndocker images\n\n# Push the image to Docker Hub\ndocker push myusername/myimage`} 
                            language="bash"
                        />

                        <ListBlock 
                            title="Pulling and Running an Image from Docker Hub"
                            items={[
                            "Anyone can pull a public image from Docker Hub using `docker pull <image_name>`.",
                            "Run a container from the pulled image using `docker run <image_name>`.",
                            "Use `-d` to run the container in detached mode."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Pull an image from Docker Hub\ndocker pull myusername/myimage\n\n# Run a container from the pulled image\ndocker run -it myusername/myimage\n\n# Run in detached mode\ndocker run -it -d myusername/myimage`} 
                            language="bash"
                        />

                        <ListBlock 
                            title="Using Docker Compose for Multi-Container Applications"
                            items={[
                            "Docker Compose allows us to define and manage multiple containers in a single file (`docker-compose.yml`).",
                            "Each service runs in a separate container but can communicate through a shared network.",
                            "Use `docker-compose up -d` to start all defined containers."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Example docker-compose.yml file\nversion: '3'\nservices:\n  app:\n    image: myusername/myapp\n    networks:\n      - mynetwork\n  db:\n    image: mysql:latest\n    environment:\n      MYSQL_ROOT_PASSWORD: example\n    networks:\n      - mynetwork\nnetworks:\n  mynetwork:`} 
                            language="yaml"
                        />

                        <CodeBlock 
                            code={`# Start the application\ndocker-compose up -d\n\n# Stop all services\ndocker-compose down`} 
                            language="bash"
                        />
                        </>
                    }
                    />
                {/* Compose */}

                <TextBlock 
                    heading="Docker Compose: Managing Multiple Containers Efficiently" 
                    id="docker-compose"
                    Children={
                        <>
                        <Para 
                            text="Docker Compose allows us to define and manage multiple containers on the same machine using a simple YAML configuration file (`docker-compose.yml`). Learn more [link]here(https://docs.docker.com/compose/)[/link]." 
                        />

                        <ListBlock 
                            title="Why Use Docker Compose?"
                            items={[
                            "Easier container management with a single YAML file.",
                            "Define multiple services (like databases, apps, caches) in one place.",
                            "Easily scale services and control networking between containers.",
                            "Use `docker-compose up` to start everything with a single command."
                            ]}
                        />

                        <ListBlock 
                            title="Basic Docker Compose Commands"
                            items={[
                            "`docker-compose up -d` - Start all services in detached mode.",
                            "`docker-compose down` - Stop and remove all containers defined in the file.",
                            "`docker-compose ps` - Show running services.",
                            "`docker-compose logs` - View logs for all services.",
                            "`docker-compose exec <service> <command>` - Run a command inside a running container."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Start all services in detached mode\ndocker-compose up -d\n\n# Stop all services\ndocker-compose down\n\n# View running services\ndocker-compose ps\n\n# View logs for all services\ndocker-compose logs\n\n# Execute a command inside a container\ndocker-compose exec mysql mysql -u root -p`} 
                            language="bash"
                        />

                        <ListBlock 
                            title="Writing a Basic docker-compose.yml File"
                            items={[
                            "A `docker-compose.yml` file is used to define services.",
                            "Each service represents a running container.",
                            "Environment variables can be defined inside each service.",
                            "Named volumes and networks can be created for better organization."
                            ]}
                        />

                        <CodeBlock 
                            code={`version: '3.8'\nservices:\n  mysql:\n    image: 'mysql:latest'\n    container_name: 'my_sql_db'\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: example\n      MYSQL_DATABASE: test_db\n    ports:\n      - '3306:3306'\n    volumes:\n      - mysql_data:/var/lib/mysql\n\nvolumes:\n  mysql_data:`} 
                            language="yaml"
                        />

                        <Para 
                            text="In this configuration, we define a MySQL service. It maps port `3306`, sets environment variables for database configuration, and uses a named volume `mysql_data` to persist data." 
                        />

                        <ListBlock 
                            title="Advanced Docker Compose Features"
                            items={[
                            "Define multiple services such as a backend, frontend, and database.",
                            "Use networks to enable communication between services.",
                            "Mount local directories using volumes to persist data.",
                            "Use `.env` files to manage environment variables."
                            ]}
                        />

                        <CodeBlock 
                            code={`version: '3.8'\nservices:\n  app:\n    image: 'node:latest'\n    container_name: 'my_node_app'\n    restart: always\n    ports:\n      - '3000:3000'\n    depends_on:\n      - mysql\n    networks:\n      - app_network\n  mysql:\n    image: 'mysql:latest'\n    container_name: 'my_sql_db'\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: example\n      MYSQL_DATABASE: test_db\n    ports:\n      - '3306:3306'\n    volumes:\n      - mysql_data:/var/lib/mysql\n    networks:\n      - app_network\n\nvolumes:\n  mysql_data:\n\nnetworks:\n  app_network:`} 
                            language="yaml"
                        />

                        <Para 
                            text="Here, we define two services: a `Node.js` application and a `MySQL` database. They communicate through a shared network called `app_network`." 
                        />

                        <ListBlock 
                            title="Using Environment Variables in Docker Compose"
                            items={[
                            "Store sensitive information like passwords in a `.env` file.",
                            "Use the `env_file` directive to load environment variables.",
                            "Avoid hardcoding credentials inside `docker-compose.yml`."
                            ]}
                        />

                        <CodeBlock 
                            code={`# .env file\nMYSQL_ROOT_PASSWORD=example\nMYSQL_DATABASE=test_db`} 
                            language="bash"
                        />

                        <CodeBlock 
                            code={`version: '3.8'\nservices:\n  mysql:\n    image: 'mysql:latest'\n    container_name: 'my_sql_db'\n    restart: always\n    env_file:\n      - .env\n    ports:\n      - '3306:3306'`} 
                            language="yaml"
                        />

                        <Para 
                            text="Now, our MySQL service loads environment variables from the `.env` file instead of storing them in the YAML file." 
                        />

                        <ListBlock 
                            title="Scaling Services with Docker Compose"
                            items={[
                            "Use `docker-compose up --scale <service>=<count>` to run multiple instances of a service.",
                            "Load balancers can distribute traffic between service instances.",
                            "Ensure that services use a shared network for seamless communication."
                            ]}
                        />

                        <CodeBlock 
                            code={`# Scale the app service to run 3 instances\ndocker-compose up --scale app=3`} 
                            language="bash"
                        />

                        <Para 
                            text="Scaling allows us to run multiple instances of a service, making the application more resilient and distributed." 
                        />
                        </>
                    }
                    />


                
            </div>

            
        </div>
    );
}

export default Docker;
