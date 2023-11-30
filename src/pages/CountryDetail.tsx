import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function CountryDetail() {
    return (
        <>
            <div className='details-header'>
                <button className="back"><KeyboardBackspaceIcon /> Back</button>
            </div>
            <div className="details">
                <img src="https://flagcdn.com/w320/us.png" />
                <section>
                    <h3>United States of America</h3>
                    <p><span className="highlight">Native Name:</span> United States</p>
                    <p><span className="highlight">Population:</span> 323,947,000</p>
                    <p><span className="highlight">Region:</span> Americas</p>
                    <p><span className="highlight">Sub Region:</span> Northern America</p>
                    <p><span className="highlight">Capital:</span> Washington D.C</p>
                </section>
                <section>
                    <p><span className="highlight">Top Level Domain:</span> .us</p>
                    <p><span className="highlight">Currencies:</span> USD</p>
                    <p><span className="highlight">Languages:</span> en</p>
                </section>
                <section>
                    <h3>Border Countries: </h3>
                    {/* List of buttons */}
                    <button>Mexico</button>
                </section>

            </div>
        </>
    )
}

export default CountryDetail;