import React, { useState, useEffect } from 'react';

function Search({searchChange}) {
    const [option, setOption] = useState('1');
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log(option)
        console.log(query)
    }, [option, query])

    const search = () => {
        console.log(option)
        if (option === '1') {
            searchChange(`https://restcountries.com/v3.1/name/${query}`)
        } else {
            searchChange(`https://restcountries.com/v3.1/subregion/${query}`)
        }
    }

    return (
        <div>
            Search by
            <select onChange={(e) => setOption(e.target.value)}>
                <option value={1}>Name</option>
                <option value={2}>Subregion</option>
            </select>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => search()}>Search</button>
            <button onClick={() => searchChange('https://restcountries.com/v3.1/all') + setQuery('')}>Reset</button>
        </div>
    )
}

export default Search;