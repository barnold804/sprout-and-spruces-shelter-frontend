import React, {useState, useEffect} from 'react';
import './App.css';
// import Shelter from './Components/Shelter';
// import Comments from './Components/Comments';
import AnimalContainer from './Components/AnimalContainer';
import Home from './Components/Home';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Adopters from './Components/Adopters';
import AboutUs from './Components/AboutUs';
// import Adopters from './Components/Adopters';

function App() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/animals')
      .then(response => response.json())
      .then(animals => setAnimals(animals))
  }, [])

  return (
    <div className="App">
        <header className ="App-header">
          <h2 className='header-banner'> 
              <img className='img-banner' src={require('./Images/HeaderBanner.png')} alt="Shelter-Banner"/> 
          </h2>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/animals">
                <AnimalContainer />
              </Route>
              <Route path="/adopters">
                <Adopters />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
            </Switch>
        </div>
          {/* <NavBar /> */}
        </header>
      {/* <Adopters /> */}
      <AnimalContainer animals={animals}/>
      {/* <Shelter /> */}

      
    </div>
  );
}

export default App;
