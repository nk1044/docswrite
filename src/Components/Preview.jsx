import React, { useEffect, useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import { databases , GetNote} from '../Appwrite/AppwriteAuth';

function Preview({ id, setTree, setSelectedComponent }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    GetNote(id).then((result) => {
      setMarkdown(result);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-neutral-300">Loading...</div>
      </div>
    );
  }

  if (!markdown) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-neutral-300">Note not found</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <MarkdownEditor 
        id={id} 
        markdownText={markdown.markdownContent} 
        title={markdown.title} 
        setTree={setTree}
        setSelectedComponent={setSelectedComponent}
      />
    </div>
  );
}

export default Preview;