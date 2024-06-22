import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="xxs:w-[90%] xs:w-[80%] sm:w-[70%] lg:w-[60%]" style={{ margin: "60px auto" }}>
      <form className="flex items-center dlg:w-[100%] dlg:items-start" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-[#2DA2DD] h-[60px] md:h-[50px] xxs:h-[40px] border border-[#2DA2DD] text-[#1F2029] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type here..."
            value={query}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-[40%] h-[60px] md:h-[50px] xxs:h-[40px] items-center justify-center py-5 px-2 ml-2 text-sm font-medium text-[#2DA2DD] border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg aria-hidden="true" className="max-md:hidden w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span className="text-xl xxs:text-[15px] sm:text-xl md:text-2xl font-proxima-nova-bold">Search</span>
        </button>
      </form>
    </div>
  );
}

export default Search;
