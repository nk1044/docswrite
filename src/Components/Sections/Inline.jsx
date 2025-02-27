import React, { useState } from 'react';

export const InlineCode = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <span className="relative inline-block">
            {/* Inline Code Styling */}
            <code 
                className="bg-gray-800 text-green-600 px-2 py-0.5 rounded font-mono text-sm cursor-pointer"
                onClick={copyToClipboard}
            >
                {text}
            </code>

            {/* Copy Tooltip */}
            {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
                    Copied!
                </span>
            )}
        </span>
    );
};
