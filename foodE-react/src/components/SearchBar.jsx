import React, { useState } from "react"

export default function SearchBar({onSearch}) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Search drinks..."
            value={searchTerm}
            onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
    )
}