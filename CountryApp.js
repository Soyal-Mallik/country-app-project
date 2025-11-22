import React, { useEffect, useState } from 'react'

import './CountryApp.css';
import Countries from './Countries';
import Search from './Search';

const url = "https://restcountries.com/v3.1/all?fields=name,flags, capital, population,area, language,region, currency";
export default function CountryApp() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);
        const fetchData = async (url) =>{
            setIsLoading(true);
            try {
                const response = await fetch(url)
                const data = await response.json();
                console.log(data)
                setCountries(data);
                setFilteredCountries(data);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setIsLoading(false);
                setError(error);
            }
        }
    
        useEffect(() =>{
            fetchData(url);
        }, [])
        const handleRemoveCountry = (name) =>{
            const filter = filteredCountries.filter((country)=>
                country.name.common != name)
                setFilteredCountries(filter)
        }
        const handleSearch = (searchValue)=>{
            let value = searchValue.toLowerCase();
            const newCountries = countries.filter((country) =>{
                const countryName = country.name.common.toLowerCase();
                return countryName.startsWith(value);
            })
            setFilteredCountries(newCountries)
        }
  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
          {isLoading && <h2>Loading...</h2>}
          {error && <h2>{error.message}</h2>}
          {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
    </>
  )
}
