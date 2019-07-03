import React, { Component, useState }from 'react';
import './App.css';
import pikachu from './images/pikachu.jpg'
import pikachuStock from './images/pikachu_stock.jpg'
import CardList from './components/CardList'
import produce from 'immer'
import { setGameState, getGamesState } from './GameStateStorage'

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

function App () {
  const [playerArray, setPlayerState] = useState(getGamesState() || [characterArray, characterArray]);

  const setPlayerArrayState = (gameState) => {
    setPlayerState(gameState)
    setGameState(gameState)
  }

  const removeStock = (characterIndex, playerIndex) => {
    setPlayerArrayState(produce(playerArray, (draftPlayerArray) => {
      const chara = draftPlayerArray[playerIndex][characterIndex]
      chara.stockCount = chara.stockCount - 1
    }))
  }

  const resetStock = (characterIndex, playerIndex) => {
    setPlayerArrayState(produce(playerArray, (draftPlayerArray) => {
      const chara = draftPlayerArray[playerIndex][characterIndex]
      chara.stockCount = 4
    }))
  }

  const resetGameState = () => {
    setPlayerArrayState([characterArray, characterArray])
  }

  return (
    <div className="App">
      <button className='resetButton' onClick={resetGameState}>
        RESTART GAME!
      </button>
      <div className="player player-one">
        <CardList
          cards={playerArray[0]}
          removeStock={removeStock}
          resetStock={resetStock}
          playerNumber={0}
        />
      </div>
      <div className="player player-two">
        <CardList
          cards={playerArray[1]}
          removeStock={removeStock}
          resetStock={resetStock}
          playerNumber={1}
        />
      </div>
    </div>
  );
}

export default App;
