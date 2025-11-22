import React from 'react'

import "./Country.css";
export default function Country(props) {
const {name, flags, capital, population,area,region, language, currency} = props.country
const handleRemoveCountry = (name) =>{
  props.onRemoveCountry(name)
}
  return (
    <article className='country'>
        <div>
            <img src={flags.png} alt={name.common}className='flag'></img>
            <h3>Name : {name.common}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Population : {population}</h3>
            <h3>Language : {language}</h3>
            <h3>Region : {region}</h3>
            <h3>Currency : {currency}</h3>
            <h3>Area : {area}</h3>
            <button className='btn' onClick={()=>{handleRemoveCountry(name.common)}}>Remove Country</button>
        </div>
    </article>
  )
}
