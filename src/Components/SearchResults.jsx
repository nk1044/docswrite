import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchResults({ 
    searchResults = [], 
    Items, 
    setComponent, 
    setComponentName, 
    setComponentIndex,
    setSearchResults // <-- Accept setSearchResults to clear results
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const searchResultsRef = useRef(null);

    const NavigateToResult = (index) => {
        const result = searchResults[index];
        if (!result) return;
        const { Index, ID } = result;
        
        // console.log(ID);

        // Find the component and set it
        const item = Items[Index];
        setComponent(item.Component);
        setComponentName(item.name);
        setComponentIndex(Index);

        navigate(`/#${ID}`); // Update URL

        // Hide search results after navigation
        setSearchResults([]);

        // Manually scroll to the element after navigation
        setTimeout(() => {
            const element = document.getElementById(ID);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    // Listen for hash changes and scroll to the section
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    // Close search results on outer click
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setSearchResults([]); // Clear search results
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div 
            ref={searchResultsRef} 
            className='z-30 w-auto max-h-80 overflow-auto absolute mt-1 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg transition-all duration-200'
        >
            {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                    <div 
                        key={index} 
                        className="search-result flex flex-col items-center p-4 hover:bg-neutral-700 cursor-pointer border-b border-neutral-600 last:border-b-0 transition-colors duration-150"
                        onClick={() => NavigateToResult(index)}
                    >
                        <h3 className="text-white font-medium text-base mb-1 truncate">{result?.data || 'Untitled'}</h3>
                        <p className="text-neutral-300 text-sm opacity-80">{result?.ID || 'No index available'}</p>
                    </div>
                ))
            ) : (
                <div className="p-4 text-neutral-400 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No results found</span>
                </div>
            )}
        </div>
    );
}

export default SearchResults;
