import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../Components/Home';
import Content from '../Components/Content';
import Search from './Search.js';
import SearchResults from '../Components/SearchResults.jsx';
import Docker from '../Documents/Docker';
import GitGitHub from '../Documents/GitGitHub.jsx';
import Kubernates from '../Documents/Kubernates.jsx';
import RedisDocs from '../Documents/RedisDocs.jsx';
import PostgreSQL from '../Documents/PostgreSQL.jsx';
import DjangoSetup from '../Documents/DjangoSetup.jsx';
import DSA from '../Documents/DSA.jsx';
import ServerMonitoring from '../Documents/ServerMonitoring.jsx';

export default function Docs() {
  const [Component, setComponent] = useState(<Home />);
  const [ComponentName, setComponentName] = useState('Home');
  const [ComponentIndex, setComponentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const debounceTimer = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      const results = await Search(value);
      setSearchResults(results);
    }, 700);
  };

  useEffect(() => {
    return () => clearTimeout(debounceTimer.current); // Cleanup timeout on unmount
  }, []);

  // Close mobile sidebar when a component is selected
  const handleComponentSelect = (component, name, index) => {
    setComponent(component);
    setComponentName(name);
    setComponentIndex(index);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const Items = [
    {name: 'Home', Component: <Home />, Children: []},

    { name: 'Docker', Component: <Docker />, Children: [
      {name: 'Image', id: 'docker-images'},
      {name: 'Container', id: 'docker-containers'},
      {name: 'Volume, E&P', id: 'docker-port-env-volume'},
      {name: 'Networking', id: 'docker-networking'},
      {name: 'Multiple', id: 'docker-multi-containers'},
      {name: 'Compose', id: 'docker-compose'},
    ] },
    { name: 'Git & GitHub', Component: <GitGitHub />, Children: [
      { name: 'Git Basics', id: 'git-basics' },
      { name: 'Git Branching and Merging', id: 'git-branching-merging' },
      { name: 'GitHub Stash', id: 'git-stash' },
      { name: 'Rebase & Reset', id: 'git-rebase-reset' },
      { name: 'Repo Setup', id: 'github-setup' },
      { name: 'Best Practices', id: 'git-best-practices' },
    ] },
    { name: 'Kubernates', Component: <Kubernates />, Children: [
      { name: 'Intro', id: 'kubernetes-intro' },
      { name: 'Architecture', id: 'kubernetes-architecture' },
      {name: 'Objects', id: 'kubernetes-objects'},
      {name: 'Minikube', id: 'kubernetes-minikube'},
      {name: 'Kubectl Commands', id: 'kubernetes-kubectl-commands'},
      {name: 'Scaling and Rolling Updates', id: 'kubernetes-scaling-updates'},
      {name: 'Yaml Deployment', id: 'kubernetes-yaml-deployment'},
    ] },
    {name: 'Redis', Component: <RedisDocs />, Children: [
      {name: 'Intro', id: 'redis-intro'},
      {name: 'Installation', id: 'redis-installation'},
      {name: 'Basic Commands', id: 'redis-basic-commands'},
      {name: 'Connecting', id: 'redis-connection'},
      {name: 'Advanced redis', id: 'redis-advanced'},
      {name: 'Best Practices', id: 'redis-best-practices'},
      {name: 'Additional', id: 'redis-resources'},
    ] },
    {name: 'PostgreSQL', Component: <PostgreSQL />, Children: [
      {name: 'Intro', id: 'postgres-intro'},
      {name: 'Installation', id: 'postgres-setup'},
      {name: 'Accessing PostgreSQL', id: 'postgres-access'},
      {name: 'Important Commands', id: 'postgres-commands'},
      {name: 'Containers S/R', id: 'postgres-stop_remove'},
    ] },
    {name: 'Django', Component: <DjangoSetup />, Children: [
      {name: 'Django Documentation', id: 'django-docs'},
      {name: 'Installation & Virtual Environment', id: 'django-install-venv'},
      {name: 'Creating Project', id: 'django-create-project'},
      {name: 'Static Templates', id: 'django-static-templates'},
      {name: 'Django App', id: 'django-create-app'},
      {name: 'Tailwind in Django', id: 'tailwind-django'},
      {name: 'SuperUser', id: 'django-superuser-admin'},
      {name: 'Models, Urls', id: 'django-models-urls'},
    ]
    },
    {name: 'DSA', Component: <DSA />, Children: [
      {name: 'Binary Search', id: 'dsa-search-binary-search'},
      {name: 'Merge Sort', id: 'dsa-sorting-mergesort'},
      {name: 'Insertion Sort', id: 'dsa-sorting-insertion-sort'},
      {name: 'Create Linked List', id: 'dsa-linked-list-creation'},
      {name: 'Delete Node in Linked List', id: 'das-linked-list-delete-node'},
      {name: 'Binary Tree', id: 'dsa-binary-tree'},
      {name: 'Preorder Traversal of BT (Recursive)', id: 'dsa-binary-tree-preorder-recursive'},
      {name: 'Inorder Traversal of BT (Recursive)', id: 'dsa-binary-tree-inorder-recursive'},
      {name: 'Postorder Traversal of BT (Recursive)', id: 'dsa-binary-tree-postorder-recursive'},
      {name: 'Level Order Traversal of BT', id: 'dsa-binary-tree-level-order'},
      {name: 'Preorder Traversal of BT (Iterative)', id: 'dsa-binary-tree-preorder-iterative'},
      {name: 'Inorder Traversal of BT (Iterative)', id: 'dsa-binary-tree-inorder-iterative'},
      {name: 'Postorder Traversal of BT (Iterative)', id: 'dsa-binary-tree-postorder-iterative'},
    ]},
    {name: 'Server Monitoring', Component: <ServerMonitoring />, Children: [
      {name: 'Overview', id: 'server-monitoring-overview'},
      {name: 'Why this stack?', id: 'server-monitoring-why-this-stack'},
      {name: 'Prerequisites', id: 'server-monitoring-prerequisites'},
      {name: 'Architecture Overview', id: 'server-monitoring-architecture-overview'},
      {name: 'Prometheus', id: 'server-monitoring-prometheus-client'},
      {name: 'Custom Metrics', id: 'server-monitoring-prometheus-custom-metrics'},
      {name: 'Prometheus Server Setup', id: 'server-monitoring-setup-prometheus-server'},
      {name: 'Grafana Setup', id: 'server-monitoring-setup-grafana'},
      {name: 'Loki Setup', id: 'server-monitoring-setup-loki'},
      {name: 'Setup Custom Dashboard', id: 'server-monitoring-unified-dashboards'},
      {name: 'Alerting setup', id: 'server-monitoring-alerts'},
      {name: 'Best Practices', id: 'server-monitoring-best-practices'},
      {name: 'Troubleshooting', id: 'server-monitoring-troubleshooting'},
      {name: 'Advanced Topics', id: 'server-monitoring-advanced-topics'},
      {name: 'Setup on local', id: 'server-monitoring-prometheus-local'},
    ]},
  ];

  const handleNextComponent = (index) => {
    if (index >= 0 && index < Items.length) {
      setComponent(Items[index].Component);
      setComponentName(Items[index].name);
      setComponentIndex(index);
    }
  };

  // Handler to close mobile overlays when clicking content area
  const handleContentClick = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div className="w-full h-screen bg-neutral-900 text-neutral-300">
      <div className="pt-2 px-2">
        <div className="border border-neutral-700 rounded-lg mx-3 bg-neutral-800">
          <div className="flex items-center justify-between w-full py-2 px-3 sm:px-6">
            {/* Logo and Title - Left aligned */}
            <div className="flex items-center cursor-pointer"
              onClick={() => navigate('/')}>
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-2 text-lg sm:text-xl font-bold text-white">DocsWrite</span>
            </div>
            
            {/* Search Bar - Middle aligned, desktop only */}
            <div className="hidden sm:flex justify-center flex-1 relative mx-4">
              <div className="w-full max-w-md relative">
                <input
                  type="search"
                  name="Searchbar"
                  id="Searchbar"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search documentation..."
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neutral-600"
                />
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded z-50">
                    <SearchResults 
                      searchResults={searchResults}
                      Items={Items}
                      setComponent={setComponent}
                      setComponentName={setComponentName}
                      setComponentIndex={setComponentIndex}
                      setSearchResults={setSearchResults}
                      setQuery={setQuery}
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* Right-aligned controls */}
            <div className="flex items-center">
              {/* Settings Button - Desktop */}
              <button className="px-4 py-2 hidden sm:block bg-neutral-700 cursor-not-allowed text-white rounded-lg hover:bg-neutral-600 transition mr-0"
                disabled={true}>
                Settings
              </button>
              
              {/* Mobile Menu Button - Right aligned */}
              <button 
                className="sm:hidden text-white focus:outline-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(100%-5rem)] px-2 relative">
        {/* Mobile Sidebar - Overlay when open */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="w-full h-full grid grid-cols-12 grid-rows-1 p-3 gap-2">
          {/* Sidebar - Regular on desktop, slide-in on mobile from the right */}
          <div 
            className={`
              fixed sm:static top-0 right-0 h-full z-40 sm:z-auto
              ${sidebarOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'}
              transition-transform duration-300 ease-in-out
              bg-neutral-900 sm:bg-transparent border-l sm:border-l-0 sm:border 
              overflow-auto p-4 w-3/4 max-w-xs sm:w-auto
              sm:col-span-3 md:col-span-2 sm:block
              border-neutral-700 sm:rounded-lg
            `}
          >
            {/* Mobile sidebar header */}
            <div className="flex items-center justify-between mb-4 sm:hidden">
              <span className="text-xl font-bold text-white">Menu</span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Sidebar content */}
            <ul className="w-full">
              {Items.map((item, index) => (
                <li key={index} className="w-full">
                  <div
                    className={`px-3 mb-2 text-lg font-medium ${
                      ComponentName === item.name ? 'text-orange-500' : 'text-neutral-300'
                    } cursor-pointer transform hover:scale-105 transition-transform duration-200 w-full border-b border-gray-500`}
                    onClick={() => handleComponentSelect(item.Component, item.name, index)}
                  >
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Main content area */}
          <div 
            className="col-span-12 sm:col-span-9 row-span-1 md:col-span-10"
            onClick={handleContentClick}
          >
            <Content
              component={Component}
              nextComponent={handleNextComponent}
              Items={Items}
              Index={ComponentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}