import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { databases } from '../Appwrite/AppwriteAuth.js';
import Preview from '../Components/Preview.jsx';

function Home() {
  const navigate = useNavigate();

  const GetTree = async () => {
    try {
      const result = await databases.listDocuments(
        import.meta.env.VITE_APWRITE_DATABASE_ID,
        import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID
      );
      // console.log("Results from Appwrite: ", result?.documents);

      if (!result?.documents) return [];

      // Corrected way of constructing ResultTree
      const ResultTree = result.documents.map((item) => ({
        id: item?.MarkDownId,
        name: item?.MarkdownTitle,
      }));

      // console.log("Result Tree: ", ResultTree);
      return ResultTree;
    } catch (error) {
      console.error('Failed to get note: ', error);
      return [];
    }
  };

  useEffect(() => {
    GetTree()
      .then((result) => {
        if (result.length > 0) {
          localStorage.setItem('markdownTree', JSON.stringify(result));
          // console.log('Tree stored in local storage:', result);
        } else {
          console.log('Empty tree, not storing.');
        }
      })
      .catch((error) => {
        console.error('Failed to get tree: ', error);
      });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-neutral-950 text-neutral-300">
      {/* Hero Section */}
      <div className="text-center px-4">
        <h1 className="font-extrabold text-5xl md:text-6xl text-white drop-shadow-lg">
          Your Docs, Organized.
        </h1>
        <p className="text-lg md:text-2xl mt-4 max-w-xl mx-auto opacity-80">
          Create, manage, and access your documentation effortlessly. Start taking notes today!
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8">
        <button
          className="bg-neutral-800 cursor-pointer text-neutral-200 px-6 py-3 rounded-full text-lg
         font-semibold shadow-md hover:bg-neutral-700 active:scale-95 transition"
          onClick={() => navigate('/docs')}
        >
          Read Docs
        </button>
      </div>
    </div>
  );
}

export default Home;
