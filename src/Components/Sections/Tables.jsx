import React from 'react';
import { InlineCode } from './Inline';
import ExternalLink from './ExternalLink';

export const Table = ({ headers, rows, title }) => {
    const formatText = (text) => {
        const result = [];
        let currentText = '';
        let i = 0;
        let key = 0;
        
        while (i < text.length) {
            if (text.substring(i, i + 6) === '[code]') {
                if (currentText) {
                    result.push(currentText);
                    currentText = '';
                }
                const codeStart = i + 6;
                const codeEnd = text.indexOf('[/code]', codeStart);
                if (codeEnd === -1) {
                    currentText += text.substring(i);
                    break;
                }
                const codeContent = text.substring(codeStart, codeEnd);
                result.push(<InlineCode key={`code-${key++}`} text={codeContent} />);
                i = codeEnd + 7;
            } else if (text.substring(i, i + 6) === '[link]') {
                if (currentText) {
                    result.push(currentText);
                    currentText = '';
                }
                const linkStart = i + 6;
                const linkEnd = text.indexOf('[/link]', linkStart);
                if (linkEnd === -1) {
                    currentText += text.substring(i);
                    break;
                }
                const linkContent = text.substring(linkStart, linkEnd);
                const openParenIndex = linkContent.indexOf('(');
                if (openParenIndex === -1) {
                    currentText += text.substring(i, linkEnd + 7);
                    i = linkEnd + 7;
                    continue;
                }
                const closeParenIndex = linkContent.indexOf(')', openParenIndex);
                if (closeParenIndex === -1) {
                    currentText += text.substring(i, linkEnd + 7);
                    i = linkEnd + 7;
                    continue;
                }
                const linkTitle = linkContent.substring(0, openParenIndex).trim();
                const linkUrl = linkContent.substring(openParenIndex + 1, closeParenIndex).trim();
                result.push(<ExternalLink key={`link-${key++}`} title={linkTitle} link={linkUrl} />);
                i = linkEnd + 7;
            } else {
                currentText += text[i];
                i++;
            }
        }
        if (currentText) {
            result.push(currentText);
        }
        return result;
    };

    return (
        <div className='border border-neutral-700 rounded-lg p-4'>
            {title && <h3 className='text-xl font-bold text-neutral-300 mb-2'>{title}</h3>}
            <table className='w-full border border-neutral-700 text-neutral-300'>
                <thead>
                    <tr className='bg-neutral-800'>
                        {headers?.map((header, index) => (
                            <th key={index} className='border border-neutral-700 p-2'>{formatText(header)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className='border border-neutral-700 p-2'>{formatText(cell)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
