import React from "react";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-300 px-6">
      {/* Navigation Bar */}
      <nav className="w-full max-w-6xl mx-auto py-6 flex justify-center gap-6 items-center">
        
        {/* <div className="hidden md:flex items-center justify-center space-x-8"> */}
          <a href="#features" className="text-neutral-400 hover:text-white transition">Features</a>
          <a href="#contribute" className="text-neutral-400 hover:text-white transition">Contribute</a>
          <a href="#community" className="text-neutral-400 hover:text-white transition">Community</a>
        {/* </div> */}

      </nav>

      {/* Hero Section */}
      <div className="max-w-3xl text-center my-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to DocsWrite
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

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/nk1044/docswrite" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-neutral-800 text-neutral-300 border border-neutral-700 px-6 py-3 rounded-md font-medium transition">Explore Github Repository</a>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="w-full max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why DocsWrite?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Structured Learning</h3>
            <p className="text-neutral-400">Follow a logical progression from basics to advanced topics with our carefully organized documentation flow.</p>
          </div>
          
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community-Powered</h3>
            <p className="text-neutral-400">Benefit from the collective knowledge of developers worldwide who contribute their expertise to our platform.</p>
          </div>
          
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Code Examples</h3>
            <p className="text-neutral-400">Learn through practical, real-world code examples that you can implement in your own projects.</p>
          </div>
        </div>
      </div>

      {/* Contribute Section */}
      <div id="contribute" className="w-full max-w-6xl mx-auto py-16 border-t border-neutral-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Contribute to DocsWrite</h2>
        
        <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Open Source Community</h3>
              <p className="text-neutral-400 mb-4">
                DocsWrite is built and maintained by developers like you. Your contributions help make our documentation more comprehensive, accurate, and helpful for everyone.
              </p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Add new documentation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Improve existing content
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Fix bugs and errors
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Translate documentation
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-center space-x-4 mb-6">
                <a href="https://github.com/nk1044/docswrite" target="_blank" rel="noopener noreferrer" className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-md font-medium transition flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/neerajkumar1044" target="_blank" rel="noopener noreferrer" className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-md font-medium transition flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
              <div className="bg-neutral-900 p-4 rounded-md border border-neutral-700 font-mono text-sm text-neutral-400">
                <div className="mb-2">$ git clone https://github.com/nk1044/docswrite.git</div>
                <div className="mb-2">$ cd docswrite</div>
                <div>$ npm install && npm run dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div id="community" className="w-full max-w-6xl mx-auto py-16 border-t border-neutral-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Join Our Community</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="text-4xl font-bold text-white mb-2">1</div>
            <div className="text-neutral-400">Contributors</div>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="text-4xl font-bold text-white mb-2">8</div>
            <div className="text-neutral-400">Documentation Pages</div>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-neutral-400">Technologies</div>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
            <div className="text-4xl font-bold text-white mb-2">2</div>
            <div className="text-neutral-400">GitHub Stars</div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 max-w-xl w-full">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-neutral-400 mb-4">Subscribe to our newsletter for the latest updates, new documentation, and community events.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="flex-1 bg-neutral-900 border border-neutral-700 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neutral-600" />
              <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-r-md font-medium transition">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;