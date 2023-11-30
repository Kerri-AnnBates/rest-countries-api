import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <div className='search-container'>
            <SearchIcon className='search-icon' />
            <input type="search" name="search" id="search" placeholder='Search for a country...' />
        </div>
    )
}

export default SearchBar;