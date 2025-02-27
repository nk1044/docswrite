import React, { useState } from 'react';
import Docker from '../Documents/Docker';
import Home from '../Components/Home';
import Content from '../Components/Content';

export default function Docs() {
  const [Component, setComponent] = useState(<Home />);
  const [ComponentName, setComponentName] = useState('Home');
  const [ComponentIndex, setComponentIndex] = useState(0);

  const Items = [
    {name: 'Home', Component: <Home />, Children: []},
    { name: 'Docker', Component: <Docker />, Children: [
      {name: 'Heading 1', id: 'docker-1'},
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
        <div className="border h-16 border-neutral-700 rounded-lg p-4 mx-3">
          Header
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
