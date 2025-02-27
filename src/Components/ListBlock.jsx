import React from 'react';

export const ListBlock = ({ title, items, ordered = false }) => {
    return (
        <div className='border border-neutral-700 rounded-lg p-4'>
            {title && <h3 className='text-lg font-bold text-neutral-300 mb-2'>{title}</h3>}
            {ordered ? (
                <ol className='list-decimal list-inside text-neutral-400 space-y-1'>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            ) : (
                <ul className='list-disc list-inside text-neutral-400 space-y-1'>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
