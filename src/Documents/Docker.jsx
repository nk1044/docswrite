import React from 'react';
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import {TextBlock} from '../Components/Sections/TextBlock';
import {Para} from '../Components/Sections/Para';
import {ListBlock} from '../Components/Sections/ListBlock';

function Docker() {

    return (
        <div className='w-full'>

            <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
                <h1 className='text-4xl font-bold text-neutral-300'>Getting Started with Docker</h1>
            </div>
            <div className='mt-2 space-y-6'>
                <TextBlock 
                    heading="Heading 1" 
                    id="docker-1"
                    Children={
                        <>
                        <Para
                        text="To list running containers, use the command [code]docker ps[/code]." 
                        />
                        <CodeBlock 
                            code={`# Pull the latest Ubuntu image\ndocker pull ubuntu\n# Run a container with an interactive shell\ndocker run -it ubuntu bash`} 
                            language="bash"
                        />
                        <Table 
                            headers={["Command", "Description"]} 
                            rows={
                                [
                                    ["docker ps", "Lists running containers"],
                                    ["docker images", "Lists available images"],
                                    ["docker stop [container_id]", "Stops a running container"]
                                ]
                            } 
                        />
                        <ListBlock 
                            title="Docker Basic Commands"
                            items={[
                                "docker ps - Lists running containers",
                                "docker pull <image> - Downloads an image",
                                "docker run <image> - Runs a container"
                            ]}
                        />

                        </>
                    }
                />
                
            </div>

            
        </div>
    );
}

export default Docker;
