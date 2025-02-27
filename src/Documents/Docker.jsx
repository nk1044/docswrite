import React from 'react'

function Docker() {
    return (
        <div className='w-full'>
            {/* Title */}
            <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
                <h1 className='text-4xl font-bold text-neutral-300'>Getting Started with Docker</h1>
            </div>
            {/* Content */}
            <div className='mt-2'>
                <ul>
                    <li className='mb-2'>
                        <div id='docker-1' className='border border-neutral-700 rounded-lg p-4'>
                            <h1 className='text-3xl font-bold'>Heading 1</h1>
                            <p className='text-lg text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <h3 className='text-xl font-bold'>SubHeading</h3>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Docker