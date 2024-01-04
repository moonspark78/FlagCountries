import logo from "./logo.svg"
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData =  async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const firstCountry = data[1];
        setCountries(firstCountry);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[]);

  
  return (
    <div className="App">
      <div className='to'>
        <h2>{countries.name.common}</h2>
        <img src={countries.flags.png}/>
      </div>
    </div>
  );
}

export default App;
