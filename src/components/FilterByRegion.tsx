import React from 'react'

function FilterByRegion() {
    return (
        <div>
            <select name="filter" id="filter">
                <option value="">Filter by Region</option>
                <option value="1">Africa</option>
                <option value="2">America</option>
            </select>
        </div>
    )
}

export default FilterByRegion;