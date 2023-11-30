import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
        <div className='search-container'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <input type="search" name="search" id="search" placeholder='Search for a country...' />
        </div>
    )
}

export default SearchBar;