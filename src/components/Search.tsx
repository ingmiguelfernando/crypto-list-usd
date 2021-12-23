import React from "react";

const Search = (props: { setSearchTerm: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="w-full flex justify-center">
      <input
        id="search"
        placeholder="Quick search..."
        type="text"
        className="w-4/5 sm:w-2/6 mb-8 lg:flex items-center text-sm leading-6 text-gray-400 rounded-md ring-1 ring-gray-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
