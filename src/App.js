import logo from './logo.svg';
import './App.css';
import Shelter from './Components/Shelter';
import Comments from './Components/Comments';
import AnimalContainer from './Components/AnimalContainer';
import Adopters from './Components/Adopters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Adopters />
      <AnimalContainer />
      <Shelter />
      
    </div>
  );
}

export default App;
