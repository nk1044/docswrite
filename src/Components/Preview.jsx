import React, {useEffect, useState} from 'react';
import MarkdownEditor from './MarkdownEditor';


function Preview({id}) {
    // fetch the data based on the id
    const [markdown, setmarkdown] = useState({
        title: 'Title 1',
        markdownContent: `# Markdown Text Editor
---`,
});

    const GetNote = async () => {
        try {
          const result = await databases.getDocument(
            String(import.meta.env.VITE_APWRITE_DATABASE_ID),
            String(import.meta.env.VITE_APWRITE_MARKDOWN_COLLECTION_ID),
            id
          );
          // console.log(result);
          setmarkdown({
            title: result.title,
            markdownContent: result.markdownContent,
          });
        } catch (error) {
          console.error('failed to get note: ', error);
        }
      }

  return (
    <div className="w-full h-full">
      <MarkdownEditor markdownText={markdown?.markdownContent} title={markdown?.title} />
    </div>
  )
}

export default Preview