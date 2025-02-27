import React from 'react';
import { InlineCode } from '../Components/Inline';
import { CodeBlock } from '../Components/CodeBlock';
import { Table } from '../Components/Tables';

function Docker() {
    const dockerCommands = [
        ["docker ps", "Lists running containers"],
        ["docker images", "Lists available images"],
        ["docker stop [container_id]", "Stops a running container"]
    ];

    return (
        <div className='w-full'>
            {/* Title */}
            <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
                <h1 className='text-4xl font-bold text-neutral-300'>Getting Started with Docker</h1>
            </div>

            {/* Content */}
            <div className='mt-2 space-y-6'>

                {/* Section 1 */}
                <div id='docker-1' className='border border-neutral-700 rounded-lg p-4'>
                    <h1 className='text-3xl font-bold'>Heading 1</h1>
                    <p className='text-lg text-neutral-500'>
                        To list running containers, use the command <InlineCode text="docker ps" />.
                    </p>
                </div>

                {/* Code Block Section */}
                <CodeBlock 
                    code={`# Pull the latest Ubuntu image\ndocker pull ubuntu\n# Run a container with an interactive shell\ndocker run -it ubuntu bash`} 
                    language="bash"
                />

                {/* Table Section */}
                <Table 
                    headers={["Command", "Description"]} 
                    rows={dockerCommands} 
                />
                
            </div>
        </div>
    );
}

export default Docker;
