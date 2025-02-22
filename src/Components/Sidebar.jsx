import React, { useState, useEffect } from 'react';
import Preview from './Preview';

const DefaultTree = [
  { name: 'Item 1', Component: (props) => <Preview {...props} />, children: [] },
  { name: 'Item 2', Component: (props) => <Preview {...props} />, children: [] },
  { name: 'Item 3', Component: (props) => <Preview {...props} />, children: [] }
];

const Sidebar01 = ({ tree=DefaultTree }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [SelectedComponent, setSelectedComponent] = useState(null);// get from local
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100">
      {/* Mobile Header */}
      <div className="flex flex-col md:flex-row">
        {isMobile ? (
          <header className="w-full bg-neutral-900 text-neutral-100 p-4 flex justify-between items-center fixed top-0 z-50 shadow-lg">
            <h1 className="text-xl font-semibold tracking-tight">Documentation</h1>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none hover:text-neutral-400 transition-colors"
            >
              {menuOpen ? '×' : '☰'}
            </button>
          </header>
        ) : (
          <aside className="fixed left-0 top-0 h-screen bg-neutral-900 text-neutral-100 p-6 w-1/5 min-w-[200px] max-w-[300px] overflow-y-auto">
            <div className="mb-8">
              <button
                className="flex items-center text-neutral-300 cursor-pointer hover:text-neutral-100 px-3 py-2 rounded-lg w-full text-left transition-colors bg-neutral-800 hover:bg-neutral-700"
                onClick={() => (window.location.href = '/')}
              >
                ⬅ Back
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {tree.map((item, index) => (
                  <li key={index}>
                    <div
                      className="group flex justify-between items-center bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg cursor-pointer transition-all"
                      onClick={() => setSelectedComponent(() => item.Component)}
                    >
                      <span className="font-medium group-hover:text-neutral-100 transition-colors">
                        {item.name}
                      </span>
                      {item.children.length > 0 && (
                        <button
                          className="p-1 hover:bg-neutral-700 rounded transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMenu(index);
                          }}
                        >
                          ▼
                        </button>
                      )}
                    </div>
                    {openMenus[index] && item.children.length > 0 && (
                      <ul className="mt-2 ml-4 pl-4 border-l border-neutral-700 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <button
                              onClick={() => {
                                setSelectedComponent(() => item.Component);
                                if (child.id) scrollToSection(child.id);
                              }}
                              className="w-full text-left text-neutral-400 hover:text-neutral-100 p-2 rounded-md text-sm transition-colors hover:bg-neutral-800"
                            >
                              {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <div
                      className="group flex justify-between items-center bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg cursor-pointer transition-all"
                      onClick={() => console.log('Add a new Doc')}
                    >
                      <span className="font-medium group-hover:text-neutral-100 transition-colors">
                        ✚ Add a new Doc
                      </span>
                    </div>
              </ul>
            </nav>
          </aside>
        )}
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && isMobile && (
        <div className="fixed inset-0 bg-neutral-900/95 backdrop-blur-sm mt-10 z-40 p-6">
          <nav className="space-y-4">
            {tree.map((item, index) => (
              <div key={index} className="border-b border-neutral-700 pb-4">
                <button
                  className="w-full text-left text-neutral-100 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
                  onClick={() => {
                    setSelectedComponent(() => item.Component);
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isMobile ? 'mt-16 w-full' : 'ml-[21%]'}`}>
        <div className="w-full">
          {SelectedComponent ? (
            <div className="w-full shadow-lg p-2 rounded-2xl overflow-auto bg-neutral-900 text-neutral-100">
              <SelectedComponent />
            </div>
          ) : (
            <div className="bg-neutral-800 mt-3 mr-3 rounded-xl shadow-lg p-10 text-center">
              <h2 className="text-3xl font-bold text-neutral-100 mb-4">
                Welcome to the Documentation
              </h2>
              <p className="text-lg text-neutral-300">
                Select a topic from the sidebar to get started with our comprehensive documentation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar01;