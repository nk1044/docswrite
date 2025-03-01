import React, { useState , useRef, useEffect} from 'react';
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

export default function Docs() {
  const [Component, setComponent] = useState(<Home />);
  const [ComponentName, setComponentName] = useState('Home');
  const [ComponentIndex, setComponentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
      const results = await Search(value); // Ensure Search function exists
      setSearchResults(results);
    }, 1000);
  };

  useEffect(() => {
    return () => clearTimeout(debounceTimer.current); // Cleanup timeout on unmount
  }, []);

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
    {name: 'DSA', Component: <DSA />, Children: []}

  ];

  const handleNextComponent = (index) => {
    if (index >= 0 && index < Items.length) {
      setComponent(Items[index].Component);
      setComponentName(Items[index].name);
      setComponentIndex(index);
    }
  };

  return (
    <div className="w-full h-screen bg-neutral-900 text-neutral-300">
      <div className="pt-2 px-2">
      <div className="border border-neutral-700 rounded-lg mx-3 bg-neutral-800">
      <div className="flex items-center justify-between w-full py-2 px-6">
        {/* Title */}
        <h1 className="text-2xl hidden sm:block font-bold cursor-pointer text-white"
        onClick={() => navigate('/')}
        >Documentation</h1>

        {/* Search Bar */}
        <div className='flex items-center relative'>
      <input
        type="search"
        name="Searchbar"
        id="Searchbar"
        value={query}
        onChange={handleSearch}
        placeholder="Search documentation..."
        className="bg-neutral-800 hidden sm:block text-white placeholder-gray-400 px-5 py-2 w-80 rounded-lg border border-neutral-600 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 transition-all shadow-md text-lg tracking-wide"
      />
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded">
          <SearchResults 
          searchResults={searchResults}
          Items={Items}
          setComponent={setComponent}
          setComponentName={setComponentName}
          setComponentIndex={setComponentIndex}
          setSearchResults={setSearchResults}/>
        </div>
      )}
    </div>


        {/* Settings Button */}
        <button className="px-4 py-2 bg-neutral-700 cursor-pointer text-white rounded-lg hover:bg-neutral-600 transition">
          Settings
        </button>
      </div>
    </div>
      </div>
      <div className="w-full h-[calc(100%-5rem)] px-2">
        <div className="w-full h-full grid grid-cols-12 grid-rows-1 p-3 gap-2">
          <div className="border border-neutral-700 rounded-lg p-4 hidden sm:block sm:col-span-3 md:col-span-2">
            {/* Sidebar */}
            <ul className="w-full">
              {Items.map((item, index) => (
                <li key={index} className="w-full">
                  <div
                    className={`px-3 mb-2 text-lg font-medium ${
                      ComponentName === item.name ? 'text-orange-500' : 'text-neutral-300'
                    } cursor-pointer transform hover:scale-105 transition-transform duration-200 w-full border-b border-gray-500`}
                    onClick={() => {
                      setComponent(item.Component);
                      setComponentName(item.name);
                      setComponentIndex(index);
                    }}
                  >
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-9 row-span-1 md:col-span-10">
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
