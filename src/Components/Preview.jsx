import React, { useEffect, useState } from 'react';
import MarkdownEditor from './MarkdownEditor';
import { databases } from '../Appwrite/AppwriteAuth';

function Preview({ id }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);

  const GetNote = async () => {
    try {
      const result = await databases.getDocument(
        String(import.meta.env.VITE_APWRITE_DATABASE_ID),
        String(import.meta.env.VITE_APWRITE_MARKDOWN_COLLECTION_ID),
        id
      );
      setMarkdown({
        title: result.title,
        markdownContent: result.markdownContent,
      });
    } catch (error) {
      console.error('failed to get note: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    GetNote();
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
      />
    </div>
  );
}

export default Preview;