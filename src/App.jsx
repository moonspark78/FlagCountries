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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[]);

  
  return (
    <div className="App">
      <div className='to'>
        <h2>title</h2>
        <img src={logo}/>
      </div>
    </div>
  );
}

export default App;
