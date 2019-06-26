import React from 'react';
import logo from './logo.svg';
import './App.css';
import pikachu from './images/pikachu.jpg'
import pikachuStock from './images/pikachu_stock.jpg'
import CharacterCard from "./components/CharacterCard"
import CardList from './components/CardList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardList cards={[{headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock}]} />
        <CharacterCard headshotSrc={pikachu} characterName="Pikachu" stockSrc={pikachuStock} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
