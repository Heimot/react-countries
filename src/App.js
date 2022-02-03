import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Country from './components/Country';
import Search from './components/Search';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [fetchUrl, setFetchUrl] = useState('https://restcountries.com/v3.1/all');
  const [countries, setCountries] = useState(null);
  const [id, setId] = useState('');

  useEffect(() => {
    fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [fetchUrl])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>
          <Search searchChange={(url) => setFetchUrl(url)} />
          <Country countries={countries} />
        </>} />
        <Route path='/country' element={<Profile id={id} />} />
      </Routes>
    </div>
  );
}

export default App;
