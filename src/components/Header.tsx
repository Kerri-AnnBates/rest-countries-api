import React, { useEffect, useState } from 'react';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const isDark = localStorage.getItem('isDark');
        if (isDark != null) {
            setIsDarkMode(isDark === 'true');
        }
    }, []);


    const handleDarkModeToggle = () => {
        const isDark = !isDarkMode;
        localStorage.setItem('isDark', isDark.toString());
        setIsDarkMode(isDark);
    }


    return (
        <header>
            <div className='container'>
                <div className='flex-header'>
                    <h1>Where in the world?</h1>
                    <button onClick={handleDarkModeToggle}>
                        {isDarkMode ? <NightlightIcon sx={{ fontSize: 16 }} /> : <NightlightOutlinedIcon sx={{ fontSize: 16 }} />} Dark Mode
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header