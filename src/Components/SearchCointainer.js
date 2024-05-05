import React, { useState } from 'react'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

function SearchCointainer() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchFormSubmit = (e) => {
      e.preventDefault();
      // Add your search logic here
      console.log('Search for:', searchQuery);
    };
  
    return (
        <div className='search-container'>
            <div className="search-page">
                <form onSubmit={handleSearchFormSubmit}>
                <input
                    type="text"
                    placeholder="Search for movies or shows"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <button type="submit">Search</button>
                </form>
            </div>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
      </div>
      
    );
}

export default SearchCointainer