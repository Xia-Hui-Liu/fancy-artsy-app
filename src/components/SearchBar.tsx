"use client"
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(query);
    }
  };

  return (
    <div className="searchBar">
      <div className="text-base text-center tracking-tight text-gray-900 py-0 my-0">Categories</div>
      <hr></hr>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="form-input block w-full pl-10 sm:text-sm sm:leading-5 mt-5 search-bar"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <FiSearch className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
