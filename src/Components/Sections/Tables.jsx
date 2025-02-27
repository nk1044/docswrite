import React from 'react';


export const Table = ({ headers, rows }) => {
    return (
        <div className='border border-neutral-700 rounded-lg p-4'>
            <h3 className='text-xl font-bold text-neutral-300 mb-2'>Docker Commands</h3>
            <table className="w-full border border-neutral-700 text-neutral-300">
                <thead>
                    <tr className='bg-neutral-800'>
                        {headers.map((header, index) => (
                            <th key={index} className="border border-neutral-700 p-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-neutral-700 p-2">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};