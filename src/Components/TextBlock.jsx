import React from 'react'
import { InlineCode } from './Inline'; // Import the InlineCode component

export const TextBlock = ({ 
    heading, 
    id,
    Children
 }) => {

    return (
        <div className='border border-neutral-700 flex flex-col gap-3 rounded-lg p-4' id={id}>
            {heading && <h2 className='text-2xl font-bold text-neutral-300'>{heading}</h2>}
            <hr className='my-2 border-neutral-700' />
            {Children}
        </div>
    );
};
