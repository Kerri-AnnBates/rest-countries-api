import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function FilterByRegion() {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <FormControl className='filter-container'>
            <Select
                className='dropdown'
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">Filter by Region</MenuItem>
                <MenuItem value={10}>Africa</MenuItem>
                <MenuItem value={20}>America</MenuItem>
                <MenuItem value={30}>Asia</MenuItem>
            </Select>
        </FormControl>

    )
}

export default FilterByRegion;