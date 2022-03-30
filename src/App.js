import './App.css';
import React, {useEffect, useState} from 'react';
// import Shelter from './Components/Shelter';
// import Comments from './Components/Comments';
// import AnimalContainer from './Components/AnimalContainer';
// import Home from './Components/Home';
import NavBar from './Components/NavBar';
// import Adopters from './Components/Adopters';
// import AboutUs from './Components/AboutUs';
// import { Route, Switch } from "react-router-dom";
// import Adopters from './Components/Adopters';

function App() {

  const [animals, setAnimals] = useState([])

  const API = 'http://localhost:9292/animals'

  useEffect(() => {
      fetch(API)
      .then(response => response.json())
      .then(animals => setAnimals(animals))
  }, [])

  function handleComments() {
    fetch(API, { 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        comments: comments,
        animal_id: animal_id,
        adopter_id: adopter_id
    })
  })
    .then(r => r.json())
    .then(data => console.log(data))
    }
}


  return (
    <div className="App">
      <header className ="App-header">
        <h2 className='header-banner'> 
          <img className='img-banner' src={require('./Images/HeaderBanner.png')} alt="Shelter-Banner"/> 
        </h2>
      </header>
      <NavBar animals={animals} />
    </div>
  );
}

export default App;
