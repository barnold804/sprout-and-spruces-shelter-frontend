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
  const [commentArray, setCommentArray] = useState([])


  useEffect(() => {
      fetch('http://localhost:9292/animals')
      .then(response => response.json())
      .then(animals => setAnimals(animals))
  }, [])
  
  useEffect(() => {
    fetch('http://localhost:9292/comments')
    .then(response => response.json())
    .then(comments => setCommentArray(comments))
}, [])

  function handleAddComment (newComment) {
    setCommentArray([...commentArray, newComment])
  }



  return (
    <div className="App">
      <header className ="App-header">
        <h2 className='header-banner'> 
          <img className='img-banner' src={require('./Images/HeaderBanner.png')} alt="Shelter-Banner"/> 
        </h2>
      </header>
      <NavBar animals={animals} commentArray={commentArray} onAddComment={handleAddComment}/>
    </div>
  );
}

export default App;
