import React, { useState, useRef, useLayoutEffect } from 'react';
import profile from "../assets/profile.png";
import profileone from "../assets/about-1.png";
import { useSelector, useDispatch } from "react-redux";

const ImageSearchApp = () => {
      const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [inputData, setInputData] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
  
  // Reference to the container for controlling scroll
  const containerRef = useRef(null);

  const searchImages = async (resetPage = false) => {
    if (resetPage) {
      setPage(1);
    }

    const url = `https://api.unsplash.com/search/photos?page=${resetPage ? 1 : page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (resetPage) {
      setImages(data.results);
    } else {
      setImages((prevImages) => [...prevImages, ...data.results]);
    }

    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchImages(true);
  };

  const resetImages = () => {
    setImages([]); // Reset images
    setPage(1); // Reset page
    setInputData(''); // Clear search input
  };

  // Ensure the scroll position remains after state updates
  useLayoutEffect(() => {
    if (containerRef.current) {
      // Maintain the scroll position after the state update
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [images]); // Trigger when images state changes

  return (
    <div ref={containerRef} className="bg-gradient-to-l from-gray-900 to-black h-[520px] sm:h-[480px] overflow-y-auto custom-scrollbar flex flex-col justify-center items-center mt-5 rounded-xl">
      <h1 className="text-2xl sm:text-2xl font-bold text-center mt-7 mb-10 text-white">Image Search App</h1>
      <form className="flex flex-col sm:flex-row justify-center items-center mb-5 w-full sm:w-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          placeholder="Search for images..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="w-4/5 sm:w-3/5 max-w-lg p-2 border-none shadow-md rounded mb-4 sm:mb-0 sm:mr-2 text-lg text-gray-700"
        />
        <button
          type="submit"
          id="search-button"
          className="p-2 bg-slate-600 text-white font-semibold text-lg shadow-md rounded transition duration-300 hover:bg-white hover:text-black"
        >
          Search
        </button>
      </form>

      <div className="search-results flex flex-wrap gap-1 justify-around max-w-5xl mx-auto p-4 mb-5">
        {images.length === 0 ? (
          <div className="flex flex-col items-center">
        <div
  className={`bg-gradient-to-r animate-spin-slow w-36 h-36 rounded-full overflow-hidden border-2 flex items-center justify-center ${
    isDarkMode
      ? "from-blue-400 via-blue-600 to-purple-600"
      : "from-purple-400 via-pink-500 to-red-500"
  }`}
>
  <img
       src={isDarkMode ? profileone : profile}
    alt="Profile"
    className="w-36 h-36 m-1 object-cover rounded-full animate-pulse"
  />
</div>
            <p
  className={`
    text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-bold pt-8
    ${isDarkMode ? "text-blue-700" : "text-black"}
  `}
>
  Let's Search for Images
</p>
          </div>
        ) : (
          images.map((result) => (
            <div key={result.id} className="search-result mb-16 w-full sm:1/3 md:w-full rounded shadow-lg shadow-white m-1 overflow-hidden">
              <img src={result.urls.small} alt={result.alt_description} className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
              <a href={result.links.html} target="_blank" rel="noopener noreferrer" className="block p-2 text-white text-center transition-colors duration-300 hover:bg-gray-800">
                {result.alt_description}
              </a>
            </div>
          ))
        )}
      </div>

      {images.length > 0 && (
        <button
          id="show-more-button"
          onClick={() => searchImages()}
          className="bg-slate-600 border-none text-white p-2 mb-8 rounded shadow-md cursor-pointer transition duration-300 hover:bg-white hover:text-black"
        >
          Show more
        </button>
      )}
      
      {/* Reset Button */}
      {images.length > 0 && (
        <button
          onClick={resetImages}
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-pink-600 text-white p-2 mb-5 rounded shadow-md cursor-pointer transition duration-300 "
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ImageSearchApp;
