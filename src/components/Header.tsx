import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons';

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
                        {isDarkMode ? <FontAwesomeIcon icon={solidMoon} /> : <FontAwesomeIcon icon={regularMoon} />} Dark Mode
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header