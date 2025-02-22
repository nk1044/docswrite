import React from 'react';
import MarkdownEditor from './MarkdownEditor';

function Preview({id}) {
    // fetch the data based on the id

  return (
    <div className="w-full h-full">
      <MarkdownEditor />
    </div>
  )
}

export default Preview