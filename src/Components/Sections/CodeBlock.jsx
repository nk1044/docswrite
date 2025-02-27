import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// CodeBlock Component with Syntax Highlighting
export const CodeBlock = ({ code, language = "javascript" }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='border border-neutral-700 rounded-lg p-4 bg-neutral-800 relative'>
            <h3 className='text-xl font-bold text-neutral-300 mb-2'>Example Code ({language})</h3>

            {/* Copy Button */}
            <button 
                onClick={copyToClipboard} 
                className="absolute top-3 right-3 bg-neutral-600 hover:bg-neutral-500 text-white px-2 py-1 text-sm rounded"
            >
                {copied ? "Copied!" : "Copy"}
            </button>

            {/* Syntax Highlighted Code Block */}
            <SyntaxHighlighter language={language} style={oneDark} className="rounded-md">
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
