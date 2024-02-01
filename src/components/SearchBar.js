// SearchBar.js
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar = ({ updateSearchQuery }) => {
  const [query, setQuery] = useState('');

//   const delayedQuery = debounce((q) => {
//     console.log(q,"qqqqqqq")
//     updateSearchQuery(q);
//   }, 10000);

const searchQuery = useDebounce(query, 10000)

  useEffect(() => {
    console.log("ddd")
    updateSearchQuery(query)
  }, [searchQuery])

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    console.log("newQuery",newQuery)
    setQuery(newQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search location..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
