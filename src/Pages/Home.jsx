import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  


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
        <button className="bg-neutral-800 cursor-pointer text-neutral-200 px-6 py-3 rounded-full text-lg
         font-semibold shadow-md hover:bg-neutral-700 active:scale-95 transition"
          onClick={() => navigate('/docs')}>
          Read Docs
        </button>
      </div>
    </div>
  );
}

export default Home;
