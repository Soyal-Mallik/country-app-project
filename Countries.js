import React from 'react'

import {v4 as uuid } from "uuid";
import Country from './Country';
import './Countries.css';

export default function Countries  (props) {
  return (
    <section className='countries'>
        {props.countries.map((country) => {
         const countryNew = {country, id : uuid()} 
         return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}/> 
        })}
    </section>
      
    
  )
}
