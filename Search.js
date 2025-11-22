import React, { useEffect, useState } from 'react'

import "./Search.css";

export default function Search(props) {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e)=>{
        setSearchText(e.target.value)
       
    }
    useEffect(() =>{
        props.onSearch(searchText)
    }, [searchText])
  return (
    <div>
      <input type='text' placeholder='Search Country' value={searchText} onChange={handleChange}></input>
    </div>
  )
}
