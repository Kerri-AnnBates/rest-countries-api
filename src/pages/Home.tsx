import React from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import Countries from '../components/Countries';
import CountryDetail from './CountryDetail';

function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <SearchFilter />
                    {/* <Countries /> */}
                    <CountryDetail />
                </div>
            </main>
        </>
    )
}

export default Home;