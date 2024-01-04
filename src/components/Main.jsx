import React, { useState, useEffect } from 'react'
import {Header} from "./Header"
import { Cards } from './Cards';
import "../App.css"

export const Main = () => {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);






  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className='content'>
      <Cards countries={countries}/>
      </div>
    </div>
    )
}
