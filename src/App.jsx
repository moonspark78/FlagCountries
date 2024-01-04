import logo from "./logo.svg"
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  
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
