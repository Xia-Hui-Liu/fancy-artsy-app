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
    <div className="searchBar flex flex-col md:flex-row items-center justify-center md:justify-end md:mr-6">
      <div className="text-base text-center tracking-tight text-gray-900 py-0 my-0 md:mr-4">Categories</div>
      <hr className="hidden md:block border-gray-500 w-px h-6 my-2 mx-4" />
      <div className="relative flex-grow md:w-auto">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="form-input block w-full pl-10 sm:text-sm sm:leading-5 mt-2 md:mt-0 md:mr-2 md:w-64 search-bar"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FiSearch className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
