import React from 'react';

function Content({ component, nextComponent, Items = [], Index }) {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full h-full grid grid-cols-12 grid-rows-1 gap-1">
        <div className="border border-neutral-700 rounded-lg p-3 md:col-span-10 col-span-12 overflow-scroll">
          {component}

          <footer className="mt-8 border-t border-gray-500 pt-4">
            <div className="flex justify-between items-center w-full max-w-3xl mx-auto px-4">
              <button
                className="bg-gray-800 cursor-pointer text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200 flex flex-col items-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => nextComponent(Index - 1)}
                disabled={Index === 0}
              >
                <h2 className="text-xl font-bold text-gray-300">
                  {Index > 0 ? Items[Index - 1].name : 'Home'}
                </h2>
                {Index > 0 && '← Previous'}
              </button>

              <div
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                <h2 className="text-xl font-bold text-gray-300">{Items[Index]?.name}</h2>
              </div>

              <button
                className="bg-gray-800 cursor-pointer text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => nextComponent(Index + 1)}
                disabled={Index === Items.length - 1}
              >
                <h2 className="text-xl font-bold text-gray-300">
                  {Index < Items.length - 1 ? Items[Index + 1].name : 'Home'}
                </h2>
                Next →
              </button>
            </div>
          </footer>
        </div>

        <div className="md:col-span-2 hidden md:block">
            <div className="border border-neutral-700 rounded-lg p-3 bg-neutral-900 shadow-md">
                {Index === 0 ? (
                    <p className="text-neutral-400 text-center py-4">
                        Select a section to see details here.
                    </p>
                ) : (
                    <ul className="w-full space-y-2">
                        {Items[Index]?.Children?.map((item, i) => (
                            <li key={i} className="w-full">
                                <a
                                    className="block px-4 py-2 text-lg font-medium text-neutral-300 cursor-pointer 
                                               transition-all duration-200 rounded-lg hover:bg-neutral-800 hover:text-white"
                                    href={`#${item.id}`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Content
