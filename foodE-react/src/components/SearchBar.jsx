import React, { useState } from "react"

export default function SearchBar({onSearch}){

    const [searchTerm, setSearchTerm] =useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    
    return(
        <div className="searchbar">
            <input
            type='text'
            placeholder='Search drinks...'
            value={searchTerm}
            onChange={handleChange} //why do we need this????
            />
            <button onClick={handleChange} >Search</button>

        </div>
    )
}