import React from 'react';
import MarkdownEditor from './MarkdownEditor';

function Preview({
    markdowns=[
        { title: 'Title 1', markdownText: `# Markdown Text Editor
---` },
        { title: 'Title 2', markdownText: `# Markdown Text Editor
---` },
],
}) {
  return (
    <div className="w-full h-full">
      <ul className='space-y-4'>
        {markdowns.map((markdown, index) => (
          <li key={index} className='bg-neutral-900 border border-neutral-600 p-4 mr-4 rounded-lg'>
            <MarkdownEditor markdownText={markdown.markdownText} title={markdown.title}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Preview