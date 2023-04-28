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
        <div className="w-1/4 p-8 bg-white">
            <SearchBar onSearch={handleSearch} />
            <div className="mt-20 text-base text-center">
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
