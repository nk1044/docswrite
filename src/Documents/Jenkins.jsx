import React from 'react'
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function Jenkins() {
  return (
    <>
      <div className='w-full'>
        <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
          <h1 className='text-4xl font-bold mb-2 text-neutral-300'>CI/CD with Jenkins</h1>
        </div>

        <div className='mt-2 space-y-6'>
        <TextBlock
  heading={'Introduction to Jenkins'}
  id={'jenkins-introduction'}
  Children={<>
    <Para
      text={`Jenkins is an open source automation server written in Java. It helps teams automate the non-human part of the software development process with robust continuous integration capabilities and by facilitating technical aspects of continuous delivery. Jenkins provides over 1,800 plugins to support building, deploying, and automating any project.`}
    />
    <Para
      text={`As a leading CI/CD tool, Jenkins enables developers to [bold]integrate code changes more frequently[/bold] and reliably. It supports the entire development lifecycle, from code compilation and testing to deployment and monitoring.`}
    />
    <Para
      text={`Key benefits of Jenkins include:`}
    />
    <ListBlock
      items={[
        'Easy installation and configuration on various operating systems',
        'Simple and intuitive web interface for management',
        'Extensive plugin ecosystem for integration with virtually any tool in the CI/CD toolchain',
        'Distributed build architecture with master-agent model for scalable automation',
        'Support for pipeline-as-code using [code]Jenkinsfile[/code]'
      ]}
    />
    <Para
      text={`Getting started with Jenkins is straightforward. You can download it from [link]https://jenkins.io/download/[/link] and follow the installation instructions for your platform.`}
    />
  </>}
/>

<TextBlock
  heading={'Installation'}
  id={'jenkins-installation'}
  Children={<>
    <Para
      text={`Before installing Jenkins, ensure your system meets the following prerequisites:`}
    />
    <ListBlock
      items={[
        'A server or virtual machine with at least 2GB of RAM',
        'At least 10GB of free disk space',
        '[bold]Java Runtime Environment (JRE) or Java Development Kit (JDK)[/bold]'
      ]}
    />
    <Para
      text={`Jenkins requires [bold]Java[/bold] to run. Verify your Java installation by running [code]java -version[/code]. If Java is not installed or you need to upgrade, use the following commands for Ubuntu:`}
    />
    <CodeBlock
      code={`sudo apt update\nsudo apt install fontconfig openjdk-17-jre`}
      language='bash'
    />
    <Para
      text={`[bold]Note:[/bold] Jenkins 2.361 and newer versions require Java 11 or Java 17. Jenkins 2.375.4 LTS and newer specifically recommends Java 17. Older Jenkins versions (2.346 and earlier) support Java 8.`}
    />
    <Para
      text={`To install the stable version of Jenkins on Ubuntu, follow these steps carefully:`}
    />
    <CodeBlock
      code={`# Download the Jenkins repository key  
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
# Add the Jenkins repository to the system
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
# Update the system
sudo apt-get update
# Install Jenkins
sudo apt-get install jenkins`}
      language='bash'
    />
    <Para
      text={`After installation, Jenkins runs on port 8080 by default. Ensure this port is accessible and not blocked by firewall rules. If you need to change the port, edit [code]/etc/default/jenkins[/code] file and modify the [code]HTTP_PORT[/code] parameter.`}
    />
    <Para
      text={`Verify Jenkins installation and manage the service using these commands:`}
    />
    <CodeBlock
      code={`# To check the status of Jenkins
sudo systemctl status jenkins
# to enable jenkins on system boot
sudo systemctl enable jenkins`}
      language='bash'
    />
    <Para
      text={`If Jenkins is not running, start it with [code]sudo systemctl start jenkins[/code]. During the first-time setup, Jenkins creates a security measure by generating an initial administrator password. Retrieve this password by running:`}
    />
    <CodeBlock
      code={`sudo cat /var/lib/jenkins/secrets/initialAdminPassword`}
      language='bash'
    />
    <Para
      text={`[bold]Post-Installation Setup:[/bold]`}
    />
    <ListBlock
      items={[
        'Open a web browser and navigate to [code]http://your_server_ip_or_domain:8080[/code]',
        'Enter the initial admin password when prompted',
        'Choose either "Install suggested plugins" for standard setup or "Select plugins to install" for custom configuration',
        'Create your first administrator user when prompted',
        'Configure the Jenkins URL - typically [code]http://your_server_ip_or_domain:8080[/code] or your preferred domain'
      ]}
    />
    <Para
      text={`For additional security, consider setting up HTTPS and configuring appropriate access controls. Refer to the [link]link(https://www.jenkins.io/doc/book/security/)[/link] for comprehensive security guidelines.`}
    />
  </>}
/>

<TextBlock
  id={'jenkins-jobs'}
  heading={'Jenkins Jobs'}
  Children={<>
    <Para
      text={`Jenkins jobs are the fundamental building blocks of automation in Jenkins. A job (also called a project) is a configurable set of instructions that directs Jenkins to execute specific tasks in a defined sequence, such as building source code, running tests, deploying applications, or executing custom scripts.`}
    />
    
    <Para
      text={`Each job maintains its own workspace, build history, and configuration. Jobs can be triggered manually, scheduled at specific times using [code]cron[/code] syntax, or automatically in response to events like code commits.`}
    />

    <Table
      headers={['Job Type', 'Description', 'Best Used For']}
      rows={[
        ['Freestyle Project', 'A general-purpose project that allows you to configure the build process using a combination of build steps, post-build actions, and plugins.', 'Simple builds and jobs with straightforward requirements.'],
        ['Pipeline', 'A job that allows you to define the entire build process using a Jenkinsfile written in Groovy DSL. Supports both Declarative and Scripted syntax.', 'Complex CI/CD workflows, multi-stage builds, and projects requiring version control of the pipeline itself.'],
        ['Multi-configuration Project', 'A job that allows you to run the same build process on multiple configurations (platforms, browsers, databases, etc.).', 'Testing applications across various environments or configurations simultaneously.'],
        ['Folder', 'A container for organizing jobs and controlling access to grouped items.', 'Managing permissions and organizing large numbers of jobs in hierarchical structures.'],
        ['GitHub Organization', 'A job that automatically creates pipelines for repositories in a GitHub organization based on Jenkinsfile presence.', 'Automating CI/CD across multiple repositories without manual configuration.'],
        ['Multibranch Pipeline', 'Automatically creates pipelines for branches and pull requests in a single repository.', 'Projects where different branches may have different build configurations.']
      ]}
    />

    <Para
      text={`[bold]Job Configuration Components:[/bold]`}
    />

    <ListBlock
      items={[
        'General settings: Configure project properties, parameters, and build retention',
        'Source Code Management: Connect to version control systems (Git, SVN, etc.)',
        'Build Triggers: Define when and how builds should start',
        'Build Environment: Set up prerequisites for the build process',
        'Build Steps: Define the actual work to be performed',
        'Post-build Actions: Configure notifications, artifact archiving, and downstream job triggers'
      ]}
    />

    <ListBlock
      title='Creating a New Job'
      items={[
        'Click on [bold]New Item[/bold] on the Jenkins dashboard.',
        'Enter a name for the job (avoid special characters and spaces) and select the type of job you want to create.',
        'Configure the job settings according to your requirements.',
        'Add build steps to define the work Jenkins should perform.',
        'Configure post-build actions to handle build results.',
        'Click [bold]Save[/bold] to create the job.',
      ]}
    />

    <Para
      text={`[bold]Best Practices for Jenkins Jobs:[/bold]`}
    />

    <ListBlock
      items={[
        'Use descriptive naming conventions for jobs to improve readability and organization.',
        'Implement proper error handling and notifications to quickly identify and address issues.',
        'Configure appropriate cleanup policies to manage disk space usage.',
        'Utilize parameters to make jobs reusable across different environments or configurations.',
        'For complex workflows, prefer Pipeline jobs with Jenkinsfiles stored in your source code repository.',
        'Implement proper security measures by configuring appropriate permissions for jobs.'
      ]}
    />

    <Para
      text={`To manage existing jobs, use the Jenkins dashboard to monitor build status, queue builds manually, view build history, and access configuration pages. You can also use the [code]jenkins-cli[/code] tool to manage jobs from the command line.`}
    />
  </>}
/>


<TextBlock
  id={'jenkins-declarative-pipeline'}
  heading={'Declarative Pipeline'}
  Children={<>
    <Para
      text={`Declarative Pipeline is a modern approach in Jenkins that provides a simplified and opinionated syntax built on top of the Jenkins Pipeline subsystems. Introduced in Jenkins 2.5, it offers a more structured and user-friendly way of defining continuous delivery pipelines compared to the Scripted Pipeline syntax.`}
    />
    
    <Para
      text={`[bold]Key Benefits of Declarative Pipeline:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Simpler syntax with reduced complexity for common CI/CD scenarios',
        'Built-in input validation that catches errors before pipeline execution',
        'Richer integration with Blue Ocean Pipeline visualization',
        'Enables "Pipeline as Code" - store your pipeline definition in version control',
        'Better readability for team members who aren\'t Groovy experts'
      ]}
    />
    
    <Para
      text={`A Declarative Pipeline must be enclosed within a [code]pipeline[/code] block and follows a specific structure. The basic skeleton includes [code]agent[/code], [code]stages[/code], and [code]steps[/code] sections. Here's an example:`}
    />
    
    <CodeBlock
      code={`pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building"
            }
        }
        stage('Test') {
            steps {
                echo "Testing"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying"
            }
        }
    }
}`}
      language='groovy'
    />
    
    <Para
      text={`The above pipeline defines three stages: Build, Test, and Deploy. Each stage contains a single step that prints a message to the console output. In real-world scenarios, these steps would include actual build commands, test execution, and deployment operations.`}
    />
    
    <Para
      text={`[bold]Essential Declarative Pipeline Components:[/bold]`}
    />
    
    <Table
      headers={['Component', 'Description', 'Required']}
      rows={[
        ['pipeline', 'The root block that contains all content and instructions', 'Yes'],
        ['agent', 'Specifies where the pipeline will execute (any, none, label, docker, etc.)', 'Yes'],
        ['stages', 'Container for one or more stage directives', 'Yes'],
        ['stage', 'Defines a conceptually distinct subset of the pipeline (build, test, deploy)', 'Yes'],
        ['steps', 'Defines the actual work to perform inside a stage', 'Yes'],
        ['post', 'Defines actions to perform after pipeline or stage completion', 'No'],
        ['environment', 'Defines environment variables for the pipeline or stage', 'No'],
        ['options', 'Configures pipeline-specific options', 'No'],
        ['parameters', 'Defines parameters that users can specify when triggering the pipeline', 'No'],
        ['triggers', 'Defines automated ways to trigger the pipeline', 'No'],
        ['tools', 'Defines tools to auto-install and put on the PATH', 'No']
      ]}
    />
    
    <Para
      text={`[bold]Advanced Example:[/bold]`}
    />
    
    <CodeBlock
      code={`pipeline {
    agent any
    
    environment {
        MAVEN_HOME = tool 'Maven-3.8.6'
        PATH = "$MAVEN_HOME/bin:$PATH"
    }
    
    options {
        timeout(time: 1, unit: 'HOURS')
        disableConcurrentBuilds()
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'mvn deploy'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}`}
      language='groovy'
    />
    
    <Para
      text={`To create a declarative pipeline job in Jenkins:`}
    />
    
    <ListBlock
      title='Create a declarative pipeline job'
      items={[
        'Click on [bold]New Item[/bold] on the Jenkins dashboard.',
        'Enter a name for the job and select [bold]Pipeline[/bold] as the job type.',
        'In the Pipeline section, select [bold]Pipeline script[/bold] and enter the pipeline script.',
        'Alternatively, select [bold]Pipeline script from SCM[/bold] to load the Jenkinsfile from your source code repository.',
        'If using SCM, specify the repository URL and credentials.',
        'Specify the path to the Jenkinsfile (default is "Jenkinsfile" in the repository root).',
        'Click [bold]Save[/bold] to create the pipeline job.'
      ]}
    />
    
    <Para
      text={`[bold]Jenkins Master-Agent Architecture[/bold]`}
    />
    
    <Para
      text={`Jenkins operates on a master-agent architecture pattern for distributed builds. The master server coordinates and distributes jobs to connected agents, which perform the actual build work. This architecture enables horizontal scaling, parallel execution, and specialized build environments.`}
    />
    
    <Para
      text={`[bold]Requirements for Agents:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Java Runtime Environment (JRE) or Java Development Kit (JDK) installation',
        'Network connectivity between master and agent',
        'SSH access for Linux/Unix agents or JNLP connection for Windows agents',
        'Sufficient hardware resources for build operations',
        'Build tools required for your pipelines (Maven, Node.js, Docker, etc.)'
      ]}
    />
    
    <Para
      text={`To connect a new agent to your Jenkins master via SSH, follow these steps on the Jenkins master server:`}
    />
    
    <CodeBlock
      code={`cd ~/.ssh
# Generate ssh key
ssh-keygen`}
      language='bash'
    />
    
    <Para
      text={`Copy the public key ([code]~/.ssh/id_rsa.pub[/code]) and add it to the [code]~/.ssh/authorized_keys[/code] file on the agent server. This enables password-less SSH authentication between master and agent.`}
    />
    
    <Para
      text={`[bold]Next Steps for Agent Configuration:[/bold]`}
    />
    
    <ListBlock
      items={[
        'In Jenkins, navigate to [bold]Manage Jenkins[/bold] > [bold]Manage Nodes and Clouds[/bold]',
        'Click [bold]New Node[/bold] and provide a name for the agent',
        'Select [bold]Permanent Agent[/bold] and click [bold]OK[/bold]',
        'Configure the agent details: # of executors, remote root directory, labels, usage',
        'Set [bold]Launch method[/bold] to "Launch agents via SSH"',
        'Enter the agent\'s hostname or IP address',
        'Configure SSH authentication (using the key generated earlier)',
        'Click [bold]Save[/bold] and the master will attempt to connect to the agent'
      ]}
    />
    
    <Para
      text={`You can use agent labels in your pipeline to target specific agents or agent types:`}
    />
    
    <CodeBlock
      code={`pipeline {
    agent {
        label 'my-agent-label'
    }
    stages {
        stage('Build on Specific Agent') {
            steps {
                echo "Running on agent with label: my-agent-label"
            }
        }
    }
}`}
      language='groovy'
    />
  </>}
/>

<TextBlock
  id={'jenkins-add-agent-node'}
  heading={'Add Agent Node'}
  Children={<>
    <Para
      text={`Agent nodes in Jenkins are worker machines that execute jobs dispatched by the Jenkins master. Adding agents allows you to distribute builds across multiple machines, improve build performance, and utilize specialized environments for different types of builds.`}
    />
    
    <Para
      text={`[bold]Prerequisites for Adding an Agent Node:[/bold]`}
    />
    
    <ListBlock
      items={[
        'A separate machine or virtual server to serve as the agent',
        'Java installation on the agent (same version as or compatible with the master)',
        'Network connectivity between the master and agent machines',
        'SSH access from the master to the agent (for SSH-based connections)',
        'Sufficient system resources (CPU, memory, disk space) on the agent for your build requirements'
      ]}
    />
    
    <Para
      text={`To add an agent node in Jenkins, follow these steps:`}
    />
    
    <ListBlock
      title='Add an Agent Node'
      items={[
        'Make sure the agent machine have java installed',
        'Navigate to [bold]Manage Jenkins > Manage Nodes and Clouds > New Node[/bold] in the Jenkins dashboard.',
        'Enter a name for the node and select [bold]Permanent Agent[/bold], then click [bold]OK[/bold].',
        'Configure the number of executors based on the agent\'s available CPU cores (typically 1-2 per core).',
        'Specify the [bold]Remote root directory[/bold] where Jenkins will store its files (e.g., [code]/var/jenkins[/code] or [code]/home/ubuntu[/code]).',
        'Add descriptive [bold]Labels[/bold] to identify the agent\'s capabilities (e.g., "linux", "docker", "java11").',
        'Set [bold]Usage[/bold] to "Only build jobs with label expressions matching this node" for dedicated agents or "Use this node as much as possible" for general-purpose agents.',
        'Select [bold]Launch method[/bold] as "Launch agents via SSH".',
        'Enter the [bold]Host[/bold] (IP address or hostname) of the agent machine.',
        'Add SSH [bold]Credentials[/bold] by clicking "Add" and entering the private SSH key or username/password.',
        'Set [bold]Host Key Verification Strategy[/bold] to "Non verifying" for testing or "Known hosts file" for production.',
        'Click [bold]Save[/bold] and verify the connection status.'
      ]}
    />
    
    <Para
      text={`[bold]Example of a Simple Pipeline Using an Agent:[/bold]`}
    />
    
    <Para
      text={`The following pipeline will run on the specified agent node and execute two simple stages:`}
    />
    
    <CodeBlock
      code={`
pipeline {
  agent { label "agent label name"}

  stages {
	  stage('stage 1'){
		  steps{
			  echo 'hello world'
      }
    }
    stage('create folder'){
		  steps{
			  sh 'mkdir -p devops'
      }
    }
  }
}
`}
      language='groovy'
    />
    
    <Para
      text={`The above pipeline defines two stages: stage 1 and create folder. The first stage prints "hello world" to the console output, and the second stage creates a directory named devops on the agent node. This simple example demonstrates how to direct Jenkins to execute pipeline stages on a specific agent using labels.`}
    />
    
    <Para
      text={`[bold]Managing Agent Nodes:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Monitor agent status on the Jenkins dashboard under "Build Executor Status"',
        'Configure agent-specific environment variables under "Node Properties" during setup',
        'Take an agent offline temporarily using "Mark this node as temporarily offline" for maintenance',
        'Disconnect an agent permanently by selecting "Delete Agent" from the agent configuration page',
        'View agent logs by clicking on the agent name and selecting "Log" from the left sidebar'
      ]}
    />
    
    <Para
      text={`[bold]Advanced Pipeline Example:[/bold]`}
    />
    
    <Para
      text={`Here is a comprehensive example of a Jenkinsfile that demonstrates a complete CI/CD workflow. This pipeline clones a Git repository, builds a Docker image, pushes the image to Docker Hub, and deploys the application using Docker - all executed on a specific agent node:`}
    />
    
    <CodeBlock
      code={`
pipeline {
  agent { label "agent label name"}

  environment {
    // Define environment variables for the pipeline
    DOCKER_REGISTRY = "docker.io"
    DOCKER_IMAGE_NAME = "docker-app"
    DOCKER_IMAGE_TAG = "latest"
  }

  stages {
	  stage('clone the code'){
		  steps{
			  echo 'cloning the code'
			  git url : "you github repo url", branch:"main"
			  echo 'code cloned successfully'
      }
    }
    stage('build the code'){
      steps{
        echo 'building the code'
        sh 'docker build -t docker-app:latest .'
        echo 'code builded successfully'
      }
    }
    stage('push the code to dockerhub'){
      steps{
        echo "pushing the code to dockerhub"
        sh "docker login"
        sh "docker image tag docker-app:latest username/docker-app:latest"
        sh "docker push username/docker-app:latest"
        echo "code pushed to dockerhub successfully"
      }
    }
    stage('deploy the code'){
      steps{
        echo 'deploying the code'
        sh 'docker run -d docker-app:latest'
        echo 'code deployed successfully'
      }
    }
  }
}
`}
      language='groovy'
    />
    
    <Para
      text={`[bold]Best Practices for Agent Management:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Use meaningful labels that describe the agent\'s capabilities or environment',
        'Set up multiple agents with the same labels for load balancing and redundancy',
        'Configure resource limits and throttling to prevent overloading agents',
        'Regularly update Java and required build tools on agent machines',
        'Monitor disk space usage and implement cleanup procedures',
        'Use containerized agents (Docker) for isolated and reproducible build environments',
        'Implement security measures such as firewalls and restricted user permissions on agents',
        'Consider dynamic provisioning of agents using cloud plugins for cost efficiency'
      ]}
    />
    
    <Para
      text={`[bold]Troubleshooting Agent Connections:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Verify network connectivity between master and agent using [code]ping[/code] or [code]telnet[/code]',
        'Check SSH key permissions (should be 600 for private keys)',
        'Ensure Java is correctly installed and in the PATH on the agent',
        'Review agent logs for connection errors',
        'Verify firewall rules allow SSH connections (typically port 22)',
        'Check the agent\'s Remote root directory has sufficient permissions',
        'Test SSH connection manually using [code]ssh -i private_key user@agent_host[/code]'
      ]}
    />
  </>}
/>
<TextBlock
  id={'jenkins-credentials-binding'}
  heading={'Credentials Binding'}
  Children={<>
    <Para
      text={`Credentials Binding is a powerful security feature in Jenkins that allows you to securely inject credentials into your Jenkins Pipeline without exposing sensitive information in plain text. This plugin helps maintain security best practices by ensuring credentials are not visible in build logs, console output, or Pipeline scripts.`}
    />
    
    <Para
      text={`[bold]Why Use Credentials Binding?[/bold]`}
    />
    
    <ListBlock
      items={[
        'Prevents credentials from appearing in build logs or console output',
        'Centralizes credential management in a secure Jenkins credential store',
        'Enables separation of duties between those who define pipelines and those who manage credentials',
        'Supports various credential types including usernames/passwords, SSH keys, secret files, and certificates',
        'Provides a consistent method for securely accessing external systems and services'
      ]}
    />
    
    <Para
      text={`To use Credentials Binding in your Jenkins Pipeline, you first need to define the credentials in the Jenkins Credentials store and then reference them in your Pipeline script using the appropriate binding method.`}
    />
    
    <Para
      text={`[bold]Supported Credential Types:[/bold]`}
    />
    
    <Table
      headers={['Credential Type', 'Use Case', 'Binding Method']}
      rows={[
        ['Username with password', 'Basic authentication for most services', 'usernamePassword()'],
        ['Secret text', 'API tokens, access keys, simple secrets', 'string()'],
        ['Secret file', 'Configuration files, certificates, key stores', 'file()'],
        ['SSH Username with private key', 'Git SSH access, server authentication', 'sshUserPrivateKey()'],
        ['Certificate', 'Client certificates for authentication', 'certificate()'],
        ['Docker Host Certificate Authentication', 'Secure Docker daemon communication', 'dockerCert()'],
        ['AWS Credentials', 'Access to AWS services', 'aws()']
      ]}
    />
    
    <ListBlock
      title='Creating a Credential in Jenkins'
      items={[
        'Navigate to [bold]Manage Jenkins > Manage Credentials > Global credentials (unrestricted) > Add Credentials[/bold] in the Jenkins dashboard.',
        'Select the appropriate credential type from the dropdown (e.g., Username with password, SSH Username with private key).',
        'Enter the required information for the selected credential type.',
        'In the [bold]ID[/bold] field, provide a unique identifier that will be used to reference this credential in Pipeline scripts (e.g., [code]dockerhub-credentials[/code]).',
        'Optionally, add a [bold]Description[/bold] to help identify the purpose of this credential.',
        'Click [bold]OK[/bold] to save the credential securely in the Jenkins store.'
      ]}
    />
    
    <Para
      text={`[bold]Permission Management:[/bold] By default, credentials are accessible to Jenkins administrators. To allow specific users or roles to use certain credentials, configure the appropriate permissions in the Jenkins security settings.`}
    />
    
    <Para
      text={`Here is an example of using Credentials Binding with [code]withCredentials[/code] block to securely authenticate with Docker Hub before pushing an image:`}
    />
    
    <CodeBlock
      code={`
stage('push the code to dockerhub'){
		steps{
			echo 'pushing the code to dockerhub'	

      withCredentials([usernamePassword(
      'credentialsId':'id given by you', 
      passwordVariable: 'dockerHubPass', 
      usernameVariable: 'dockerHubUser')]){

      sh 'docker login -u \$\{env.dockerHubUser} -p \$\{env.dockerHubPass}'
      sh 'docker image tag docker-app:latest \$\{env.dockerHubUser}/docker-app:latest'
      sh 'docker push \$\{env.dockerHubUser}/docker-app:latest'

      }
    }
}

  `}
      language='groovy' 
    />
    
    <Para
      text={`[bold]How Credentials Binding Works:[/bold]`}
    />
    
    <ListBlock
      items={[
        'The [code]withCredentials[/code] block retrieves credentials securely from the Jenkins credential store',
        'Credentials are injected as environment variables that are only available within the block scope',
        'Jenkins automatically masks these values in build logs (replaced with asterisks ****)',
        'Variables are automatically unset when execution leaves the [code]withCredentials[/code] block scope',
        'The [code]\$\{env.variableName}[/code] syntax is used to reference these secured variables in shell commands'
      ]}
    />
    
    <Para
      text={`[bold]Additional Examples of Credentials Binding:[/bold]`}
    />
    
    <Para
      text={`[bold]1. Using SSH credentials for Git operations:[/bold]`}
    />
    
    <CodeBlock
      code={`
stage('Clone Repository') {
  steps {
    withCredentials([sshUserPrivateKey(credentialsId: 'git-ssh-key', 
                                      keyFileVariable: 'SSH_KEY')]) {
      sh '''
        eval \$(ssh-agent -s)
        ssh-add \$SSH_KEY
        git clone git@github.com:username/repo.git
      '''
    }
  }
}
    `}
      language='groovy'
    />
    
    <Para
      text={`[bold]2. Using AWS credentials for S3 operations:[/bold]`}
    />
    
    <CodeBlock
      code={`
stage('Upload to S3') {
  steps {
    withCredentials([[
      $class: 'AmazonWebServicesCredentialsBinding',
      credentialsId: 'aws-credentials',
      accessKeyVariable: 'AWS_ACCESS_KEY_ID',
      secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
    ]]) {
      sh 'aws s3 cp ./build s3://my-bucket/ --recursive'
    }
  }
}
    `}
      language='groovy'
    />
    
    <Para
      text={`[bold]Best Practices for Credentials Management:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Use descriptive IDs for credentials that indicate their purpose and scope',
        'Apply the principle of least privilege - grant only necessary permissions to credentials',
        'Regularly audit and rotate credentials based on your organization\'s security policies',
        'Consider using credential binding variables directly in shell scripts instead of exporting them as environment variables',
        'Implement credential scoping by restricting credentials to specific folders or projects',
        'Use credential providers that integrate with secrets management systems for enterprise environments',
        'Avoid storing credentials in SCM or hardcoding them in Jenkinsfiles',
        'For highly sensitive environments, consider using the HashiCorp Vault plugin for Jenkins'
      ]}
    />
    
    <Para
      text={`[bold]Security Considerations:[/bold] While Jenkins credentials binding secures credentials during execution, it's essential to ensure your Jenkins instance itself is properly secured. This includes restricting access to Jenkins, enabling security realms, and properly configuring build executor permissions.`}
    />
  </>}
/>

<TextBlock
  id={'jenkins-github-webhooks'}
  heading={'GitHub Webhooks Integration'}
  Children={<>
    <Para
      text={`GitHub webhooks enable automatic triggering of Jenkins jobs whenever code changes are pushed to your GitHub repository. This integration creates a seamless CI/CD pipeline that reacts immediately to developer activities without requiring manual build initiation.`}
    />
    
    <Para
      text={`[bold]Benefits of GitHub Webhooks:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Automated build triggering on repository events (push, pull request, merge)',
        'Immediate feedback to developers on code quality and integration status',
        'Elimination of manual build processes, reducing human error',
        'Traceability between code changes and build results',
        'Faster development cycles with continuous integration'
      ]}
    />
    
    <Para
      text={`[bold]Prerequisites:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Jenkins server with public internet access or properly configured network routing',
        'GitHub repository with administrator access',
        'GitHub Integration plugin installed on Jenkins',
        'Jenkins job configured to build from the GitHub repository'
      ]}
    />
    
    <Para
      text={`To set up GitHub webhooks to trigger Jenkins builds automatically, follow these steps:`}
    />
    
    <ListBlock
      title='Configuring GitHub Webhooks'
      items={[
        'Navigate to your GitHub repository that contains the code you want to build in Jenkins.',
        'Click on [bold]Settings[/bold] in the repository navigation menu (requires administrator access).',
        'Select [bold]Webhooks[/bold] from the left sidebar menu.',
        'Click [bold]Add webhook[/bold] button in the top right.',
        'In the [bold]Payload URL[/bold] field, enter your Jenkins URL followed by [code]/github-webhook/[/code] (e.g., [code]https://jenkins.example.com/github-webhook/[/code]).',
        'Set [bold]Content type[/bold] to [code]application/json[/code].',
        'For [bold]Secret[/bold], you can optionally add a shared secret token for added security.',
        'Under [bold]Which events would you like to trigger this webhook?[/bold], select the appropriate option:',
        '- [bold]Just the push event[/bold] for commits only',
        '- [bold]Send me everything[/bold] for all events',
        '- [bold]Let me select individual events[/bold] for custom configuration (pull requests, releases, etc.)',
        'Ensure the [bold]Active[/bold] checkbox is selected.',
        'Click [bold]Add webhook[/bold] to save the configuration.'
      ]}
    />
    
    <Para
      text={`[bold]Configuring Jenkins for GitHub Webhooks:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Navigate to [bold]Manage Jenkins > Configure System[/bold].',
        'Locate the [bold]GitHub[/bold] section.',
        'Click [bold]Add GitHub Server[/bold] if not already configured.',
        'Provide a [bold]Name[/bold] for the GitHub server configuration.',
        'Add GitHub credentials if you need to access private repositories.',
        'Test the connection using the [bold]Test Connection[/bold] button.',
        'Save the configuration.'
      ]}
    />
    
    <Para
      text={`[bold]Enabling Webhook Trigger in Jenkins Job:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Open the Jenkins job you want to trigger with GitHub events.',
        'Click [bold]Configure[/bold] to edit the job settings.',
        'In the [bold]Build Triggers[/bold] section, check [bold]GitHub hook trigger for GITScm polling[/bold].',
        'Ensure the job\'s [bold]Source Code Management[/bold] is set to Git with the correct repository URL.',
        'Save the job configuration.'
      ]}
    />
    
    <Para
      text={`After setting up the webhook, GitHub will send a POST request to your Jenkins server whenever the selected events occur in your repository. Jenkins will then automatically trigger the configured job.`}
    />
    
    <Para
      text={`[bold]Testing the Webhook:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Return to the GitHub repository webhooks page.',
        'Locate your newly created webhook in the list.',
        'Review the [bold]Recent Deliveries[/bold] section to see if any events have been sent.',
        'Make a small commit and push to the repository to trigger the webhook.',
        'Check if the Jenkins job starts automatically after the push.',
        'Examine the delivery details in GitHub and the build logs in Jenkins for any errors.'
      ]}
    />
    
    <Para
      text={`[bold]Troubleshooting Webhook Issues:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Verify your Jenkins URL is publicly accessible from the internet or has the proper network routing.',
        'Check for any firewalls or security groups that might block incoming webhook requests.',
        'Ensure the GitHub Integration plugin is properly installed in Jenkins.',
        'Examine the GitHub webhook delivery logs for failure messages.',
        'Verify the webhook payload URL is correctly formatted with the trailing slash [code]/github-webhook/[/code].',
        'Check Jenkins system logs for any errors related to webhook processing.',
        'For secure Jenkins instances, ensure the webhook can authenticate properly.'
      ]}
    />
    
    <Para
      text={`[bold]Advanced Configuration:[/bold] For more sophisticated setups, consider using the GitHub Branch Source plugin with Multibranch Pipelines, which can automatically discover branches and pull requests from your GitHub repository and create appropriate Jenkins jobs.`}
    />
  </>}
/>

<TextBlock
  id={'jenkins-shared-libraries'}
  heading={'Jenkins Shared Libraries'}
  Children={<>
    <Para
      text={`Jenkins Shared Libraries provide a powerful mechanism for defining reusable code that can be shared across multiple Jenkins pipelines. They allow teams to create standardized pipeline components, centralize common functionality, and maintain consistency across projects while reducing code duplication.`}
    />
    
    <Para
      text={`[bold]Key Benefits of Shared Libraries:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Code reusability across multiple pipelines and projects',
        'Centralized maintenance of common pipeline components',
        'Standardization of CI/CD practices across teams',
        'Version control of pipeline logic',
        'Simplified pipeline scripts with abstracted complexity',
        'Reduced duplication and easier updates to common functions'
      ]}
    />
    
    <Para
      text={`[bold]Shared Library Structure:[/bold]`}
    />
    
    <Table
      headers={['Directory', 'Purpose']}
      rows={[
        ['vars/', 'Global variables/functions accessible directly in pipelines'],
        ['src/', 'Java/Groovy classes that can be imported and used in pipelines'],
        ['resources/', 'Non-Groovy files that can be loaded via libraryResource step']
      ]}
    />
    
    <Para
      text={`[bold]Setting Up a Shared Library:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Create a Git repository to store your shared library code',
        'Add a [code]vars/[/code] directory in the repository root',
        'Create Groovy script files in this directory (e.g., [code]hello.groovy[/code], [code]clone.groovy[/code])',
        'Implement shared functions using the [code]def call()[/code] method pattern'
      ]}
    />
    
    <Para
      text={`Here's an example of a simple shared library function for displaying a greeting message:`}
    />
    
    <CodeBlock
      code={`// vars/hello.groovy
def call(){
  echo "hello world"
}`}
      language='groovy'
    />
    
    <Para
      text={`A more practical example that accepts parameters for Git operations:`}
    />
    
    <CodeBlock
      code={`// vars/clone.groovy
def call(String url, String branch){
  echo 'cloning the code'
  git url : url, branch: branch
  echo 'code cloned successfully'
}`}
      language='groovy'
    />
    
    <Para
      text={`[bold]Configuring Shared Libraries in Jenkins:[/bold]`}
    />
    
    <ListBlock
      title='Register a Shared Library'
      items={[
        'Navigate to [bold]Jenkins Dashboard > Manage Jenkins > System[/bold]',
        'Scroll down to the [bold]Global Pipeline Libraries[/bold] section',
        'Click [bold]Add[/bold] to configure a new library',
        'Provide a [bold]Name[/bold] for the library (this will be used to reference it in pipelines)',
        'Set [bold]Default version[/bold] to a branch, tag, or commit hash (e.g., [code]main[/code], [code]v1.0[/code])',
        'Select [bold]Retrieval method[/bold] as "Modern SCM"',
        'Choose [bold]Git[/bold] as the SCM source',
        'Enter the [bold]Repository URL[/bold] of your shared library',
        'Add credentials if the repository requires authentication',
        'Optionally check [bold]Load implicitly[/bold] to make the library available to all pipelines without explicit imports',
        'Click [bold]Save[/bold] to register the library'
      ]}
    />
    
    <Para
      text={`[bold]Using Shared Libraries in Pipelines:[/bold]`}
    />
    
    <Para
      text={`To use a shared library in your pipeline, you need to import it at the beginning of your Jenkinsfile:`}
    />
    
    <CodeBlock
      code={`@Library('your-library-name') _

pipeline {
  agent any
  
  stages {
    stage('Greeting') {
      steps {
        script {
          hello() // Calls the hello() function from vars/hello.groovy
        }
      }
    }
    
    stage('Clone Repository') {
      steps {
        script {
          clone("https://github.com/username/repo.git", "main") // Calls the clone() function with parameters
        }
      }
    }
  }
}`}
      language='groovy'
    />
    
    <Para
      text={`[bold]Note:[/bold] The trailing underscore ([code]_[/code]) after the library import is required when you're not assigning the library to a variable.`}
    />
    
    <Para
      text={`[bold]Advanced Shared Library Techniques:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Create custom pipeline steps by returning closures from your [code]call()[/code] methods',
        'Implement class-based solutions in the [code]src/[/code] directory for more complex functionality',
        'Use the [code]resources/[/code] directory to store configuration templates, JSON schemas, or other non-Groovy files',
        'Access resource files using the [code]libraryResource[/code] step',
        'Implement versioned libraries to test changes safely before rolling them out'
      ]}
    />
    
    <Para
      text={`[bold]Using Jenkinsfile from Source Control:[/bold]`}
    />
    
    <Para
      text={`For a more maintainable approach, store your pipeline definition in a [code]Jenkinsfile[/code] directly in your source code repository:`}
    />
    
    <ListBlock
      title='Configure Pipeline from SCM'
      items={[
        'Create a file named [code]Jenkinsfile[/code] in the root of your source code repository',
        'Define your pipeline in this file, including shared library imports',
        'In Jenkins, create a new Pipeline job',
        'In the job configuration, select [bold]Pipeline script from SCM[/bold] as the Definition',
        'Choose [bold]Git[/bold] as the SCM',
        'Enter your repository URL and credentials',
        'Specify the branch to build',
        'Set the [bold]Script Path[/bold] to [code]Jenkinsfile[/code] (or the path to your pipeline script)',
        'Save the configuration'
      ]}
    />
    
    <Para
      text={`This approach ensures your pipeline definition is versioned alongside your application code, providing better traceability and allowing pipeline changes to follow the same review process as code changes.`}
    />
    
    <Para
      text={`[bold]Best Practices for Shared Libraries:[/bold]`}
    />
    
    <ListBlock
      items={[
        'Document your shared library functions with clear comments and examples',
        'Include parameter validation to fail fast when incorrect values are provided',
        'Follow semantic versioning for your library releases',
        'Write unit tests for your shared library code',
        'Create wrapper functions for third-party tools to standardize usage',
        'Consider creating a "pipeline template" function for standard project types',
        'Use a development branch to test changes before merging to the main branch',
        'Maintain backward compatibility when possible, or provide clear migration guides'
      ]}
    />
    
    <Para
      text={`By leveraging Shared Libraries effectively, teams can create a consistent, maintainable, and scalable CI/CD infrastructure that adapts to organizational best practices and evolves with your development needs.`}
    />
  </>}
/>


        </div>
      </div>
    </>
  )
}

export default Jenkins