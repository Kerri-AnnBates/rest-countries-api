import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <header>
            <h1>Where in the world?</h1>
            <div><FontAwesomeIcon icon={regularMoon} /> Dark Mode</div>
        </header>
    )
}

export default Header