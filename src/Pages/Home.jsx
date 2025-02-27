import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { databases, GetTree } from '../Appwrite/AppwriteAuth.js';
import Button from '../Components/Button.jsx';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // GetTree();
    } catch (error) {
      console.error('Failed to get tree: ', error); 
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-neutral-950 text-neutral-300">
      {/* Hero Section */}
      <div className="text-center px-4">
        <h1 className="font-extrabold text-5xl md:text-6xl text-neutral-400 drop-shadow-lg">
          Your Docs, Organized.
        </h1>
        <p className="text-lg text-neutral-600 md:text-2xl mt-4 max-w-xl mx-auto opacity-80">
          Create, manage, and access your documentation effortlessly. Start taking notes today!
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex gap-2">
        <Button
          text="Read Docs"
          onClick={() => navigate('/docs')}
          customClass="bg-neutral-800"
        />
      </div>
    </div>
  );
}

export default Home;
