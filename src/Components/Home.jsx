import React from "react";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-300 px-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to the DocsWrite
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          A structured and well-organized documentation platform designed to help you explore, learn, 
          and master various technologies, tools, and frameworks. Whether you're a beginner or an expert, 
          find everything you need in one place.
        </p>

        <div className="mt-8 border-t border-neutral-700 w-20 mx-auto"></div>

        <p className="mt-6 text-neutral-500 text-sm">
          Navigate through detailed guides, reference materials, and best practices, all structured for 
          seamless learning and efficient knowledge discovery.
        </p>
      </div>
    </div>
  );
}

export default Home;
