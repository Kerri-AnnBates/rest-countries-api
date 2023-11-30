import React from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';

function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <SearchFilter />
                    <div>Home Page</div>
                </div>
            </main>
        </>
    )
}

export default Home;