import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import './Profile.css';

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const query = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = query.id;
        fetch(`https://restcountries.com/v3.1/alpha/${value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => setProfile(data) + console.log(data))
    }, [])

    const languages = (language) => {
        console.log(language)
        let lng = '';
        Object.entries(language).map(([key, value]) => lng = lng + " " + value)
        return lng;
    }

    const currencies = (currency) => {
        let lng = '';
        Object.entries(currency).map(([key, value]) => lng = lng + " " + value.name)
        return lng;
    }

    return (
        <div>
            <Link to='/'><button>Back</button></Link>
            <div className='profile'>
                {profile !== null && profile.length !== 0 ?
                    <div className='box'>
                        <div>
                            <img className='flag' src={profile[0].flags.png} />
                        </div>
                        <div className='countrydata'>
                            <div>
                                Country name: {profile[0].name.common}
                            </div>
                            <div>
                                Capital city: {profile[0].capital}
                            </div>
                            <div>
                                Population: {profile[0].population}
                            </div>
                            <div>
                                Languages: {languages(profile[0].languages)}
                            </div>
                            <div>
                                Currencies: {currencies(profile[0].currencies)}
                            </div>
                        </div>
                    </div>
                    : <div>Not found!</div>}
            </div>
        </div>
    )
}

export default Profile;