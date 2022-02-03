import React from 'react';
import { Link } from "react-router-dom"
import './Country.css';


function Country({ countries }) {
    console.log(countries)

    return (
        <div className='flex'>
            {countries !== null && Array.isArray(countries) ? countries.map((country) => {
                return (
                    <div key={country.cca2} className='box'>
                        <div>
                            <img className='flag' src={country.flags.png} />
                        </div>
                        <div className='countrydata'>
                            <div>
                                Country: {country.name.common}
                            </div>
                            <div>
                                Subregion: {country.subregion}
                            </div>
                            <div>
                                Population: {country.population}
                            </div>
                            <Link to={`/country?id=${country.cca2}`}><button>View country profile</button></Link>
                        </div>

                    </div>
                )
            }) : <div>Not found</div>}
        </div>
    )
}

export default Country;