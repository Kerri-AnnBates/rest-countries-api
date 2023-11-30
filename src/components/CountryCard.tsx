function CountryCard() {
    return (
        <>
            <div className="card-container">
                <div className="card-image"><img src="https://flagcdn.com/w320/us.png" /></div>
                <div className="card-info">
                    <h3>United States of America</h3>
                    <p><span className="highlight">Population:</span> 323,947,000</p>
                    <p><span className="highlight">Region:</span> Americas</p>
                    <p><span className="highlight">Capital:</span> Washington D.C</p>
                </div>
            </div>
        </>
    )
}

export default CountryCard;