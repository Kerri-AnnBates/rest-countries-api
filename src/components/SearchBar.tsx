import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" name="search" id="search" placeholder='Search for a country...' />
        </div>
    )
}

export default SearchBar;