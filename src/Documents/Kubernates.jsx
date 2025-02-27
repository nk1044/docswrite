import React from 'react';
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function Kubernates() {
  return (
    <div className='w-full'>

    <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
        <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Getting Started with Kubernetes</h1>
    </div>

    <div className='mt-2 space-y-6'>

        <TextBlock
            heading='Introduction to Kubernetes'
            id='intro'
            Children={
                <Para text='Kubernetes (K8s) is an open-source platform for automating deployment, scaling, and managing containerized applications. It provides [code]container orchestration[/code], [code]scalability[/code], [code]load balancing[/code], [code]high availability[/code], and seamless [code]rollouts and rollbacks[/code].' />
            }
        />

        <TextBlock
            heading='Kubernetes Architecture'
            id='architecture'
            Children={
                <>
                    <Para text='Kubernetes follows a master-worker architecture with the following components:' />
                    <ListBlock
                        title='Control Plane Components'
                        items={[
                            '[code]Kube-API Server[/code] - User interaction interface.',
                            '[code]etcd[/code] - Key-value store for cluster data.',
                            '[code]Controller Manager[/code] - Handles controllers for nodes, endpoints, etc.',
                            '[code]Scheduler[/code] - Assigns workloads to worker nodes.',
                            '[code]Cloud Controller Manager[/code] - Manages cloud provider-specific components.'
                        ]}
                        ordered={true}
                    />
                    <ListBlock
                        title='Worker Node Components'
                        items={[
                            '[code]Kubelet[/code] - Ensures containers are running in pods.',
                            '[code]Kube Proxy[/code] - Manages network rules for pod communication.',
                            '[code]CRI[/code] - Manages container runtime.'
                        ]}
                        ordered={true}
                    />
                </>
            }
        />

        <TextBlock
            heading='Key Kubernetes Objects'
            id='objects'
            Children={
                <>
                    <Table
                        header={['Kubernetes Object', 'Description']}
                        rows={[
                            ['[code]Pods[/code]', 'Basic deployable unit, abstraction over containers.'],
                            ['[code]Services[/code]', 'Expose a set of pods to network with a stable IP.'],
                            ['[code]ConfigMap[/code]', 'External configuration storage.'],
                            ['[code]Secrets[/code]', 'Securely store sensitive information.'],
                            ['[code]Volume[/code]', 'Persistent storage for pods.'],
                            ['[code]Deployment[/code]', 'Manages replicas and updates of pods.'],
                            ['[code]StatefulSet[/code]', 'For stateful applications like databases.']
                        ]}
                    />
                </>
            }
        />

        <TextBlock
            heading='Minikube: Setting Up a Local Kubernetes Cluster'
            id='minikube'
            Children={
                <>
                    <Para text='Minikube allows running Kubernetes locally for testing and development. Below are the commands to set it up:' />
                    <CodeBlock
                        code={`minikube start
minikube status
minikube stop
minikube dashboard`}
                        language='bash'
                    />
                </>
            }
        />

        <TextBlock
            heading='Basic kubectl Commands'
            id='kubectl-commands'
            Children={
                <>
                    <Para text='[code]kubectl[/code] is the CLI tool to interact with Kubernetes. Below are common commands:' />
                    <Table
                        header={['Command', 'Description']}
                        rows={[
                            ['[code]kubectl create deployment my-nginx --image=nginx[/code]', 'Create a deployment.'],
                            ['[code]kubectl get deployments[/code]', 'List all deployments.'],
                            ['[code]kubectl get pods[/code]', 'List all pods.'],
                            ['[code]kubectl describe pods[/code]', 'Get details about pods.'],
                            ['[code]kubectl delete deployment my-nginx[/code]', 'Delete a deployment.']
                        ]}
                    />
                </>
            }
        />

        <TextBlock
            heading='Scaling and Rolling Updates'
            id='scaling-updates'
            Children={
                <>
                    <Para text='To scale and update applications in Kubernetes, use the following commands:' />
                    <CodeBlock
                        code={`kubectl scale deployment my-app --replicas=4
kubectl set image deployment my-app my-container=myimage:v2
kubectl rollout undo deployment my-app`}
                        language='bash'
                    />
                </>
            }
        />

        <TextBlock
            heading='Deploying Applications with YAML'
            id='yaml-deployment'
            Children={
                <>
                    <Para text='Use YAML files to define deployments and services. Below is an example:' />
                    <CodeBlock
                        code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
template:
  spec:
    containers:
      - name: nginx
        image: nginx:latest
---
apiVersion: v1
kind: Service
metadata:
  name: my-nginx-service
spec:
  selector:
    app: my-nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer`}
                        language='yaml'
                    />
                    <Para text='Apply the deployment using:' />
                    <CodeBlock
                        code='kubectl apply -f deployment.yml'
                        language='bash'
                    />
                </>
            }
        />
    </div>

</div>
  )
}

export default Kubernates