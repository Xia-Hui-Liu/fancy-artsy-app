import { useState, useMemo } from "react";
import Contacts from "./Contacts"
import News from "./News"
import SearchBar from "./SearchBar"

const SideBar:React.FC = () => {
    const [searchResults, setSearchResults] = useState<string>("");

    const handleSearch = (query: string) => {
      setSearchResults(query);
    };

    const filteredContacts = useMemo(() => (
      <Contacts isContactPage={false} searchQuery={searchResults} />
    ), [searchResults]);

    const filteredNews = useMemo(() => (
      <News isNewsPage={false} searchQuery={searchResults} />
    ), [searchResults]);

    return (
        <div className="sideBar w-1/4 p-10 bg-white">
            <SearchBar onSearch={handleSearch} />
            <div className="mt-10 text-base text-center mb-20">
                <p>Latest News</p>
                <hr></hr>
                {filteredNews}
            </div>
            <div>
                {filteredContacts}
            </div>
       </div>
    )
}

export default SideBar;
