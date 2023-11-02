import React, { useState, useRef } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef()

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch()
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}