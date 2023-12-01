import SearchBar from './SearchBar';
import FilterByRegion from './FilterByRegion';

function SearchFilter() {
    return (
        <section>
            <div className='search-filter'>
                <SearchBar />
                <FilterByRegion />
            </div>
        </section>
    )
}

export default SearchFilter;