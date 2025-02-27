import React, { useState } from 'react';
import Home from '../Components/Home';
import Content from '../Components/Content';
import Search from './Search.js';
import Docker from '../Documents/Docker';
import GitGitHub from '../Documents/GitGitHub.jsx';
import Kubernates from '../Documents/Kubernates.jsx';

export default function Docs() {
  const [Component, setComponent] = useState(<Home />);
  const [ComponentName, setComponentName] = useState('Home');
  const [ComponentIndex, setComponentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let debounceTimer;
  const handleSearch = (e) => {
    const value = e.target.value;
    if (!value || value=='') return setQuery(value), setSearchResults([]);
    setQuery(value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const results = await Search(value);
      setSearchResults(results);
    }, 1000);
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
      { name: 'Intro', id: 'intro' },
      { name: 'Architecture', id: 'architecture' },
      {name: 'Objects', id: 'objects'},
      {name: 'Minikube', id: 'minikube'},
      {name: 'Kubectl Commands', id: 'kubectl-commands'},
      {name: 'Scaling and Rolling Updates', id: 'scaling-updates'},
      {name: 'Yaml Deployment', id: 'yaml-deployment'},
    ] },

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
        <h1 className="text-2xl font-bold text-white">Documentation</h1>

        {/* Search Bar */}
        <input
        type="search"
        name="Searchbar"
        id="Searchbar"
        value={query}
        onChange={handleSearch}
        placeholder=" Search documentation..."
        className="bg-neutral-800 text-white placeholder-gray-400 px-5 py-2 w-80 rounded-lg border border-neutral-600 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 transition-all shadow-md text-lg tracking-wide"
      />


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
