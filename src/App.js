import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import pikachu from './images/pikachu.jpg'
import pikachuStock from './images/pikachu_stock.jpg'
import CharacterCard from "./components/CharacterCard"
import CardList from './components/CardList'

const characterArray = [
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: pikachu, characterName: "Pikachu", stockSrc: pikachuStock, stockCount: 4}
  ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characterArray
    }
  }

  removeStock = (index) => {
    const characters = [...this.state.characters]
    const chara = {...characters[index]}
    chara.stockCount = chara.stockCount - 1
    characters[index] = chara
    this.setState({characters})
  }

  resetStock = () => {
    this.setState({stocks: [1, 1, 1, 1]})
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.characters} removeStock={this.removeStock} />
        <CardList cards={this.state.characters} removeStock={this.removeStock} />
      </div>
    );
  }
}

export default App;
