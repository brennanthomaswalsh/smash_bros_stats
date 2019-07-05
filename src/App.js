import React, { Component, useState }from 'react';
import './App.css';
import pikachuHeadshot from './images/pikachu_headshot.png'
import pikachuStock from './images/pikachu_stock.png'
import luigiHeadshot from './images/luigi_headshot.png'
import luigiStock from './images/luigi_stock.png'
import marioHeadshot from './images/mario_headshot.png'
import marioStock from './images/mario_stock.png'
import dkHeadshot from './images/dk_headshot.png'
import dkStock from './images/dk_stock.png'
import jigglypuffHeadshot from './images/jigglypuff_headshot.png'
import jigglypuffStock from './images/jigglypuff_stock.png'
import linkHeadshot from './images/link_headshot.png'
import linkStock from './images/link_stock.png'
import samusHeadshot from './images/samus_headshot.png'
import samusStock from './images/samus_stock.png'
import falconHeadshot from './images/falcon_headshot.png'
import falconStock from './images/falcon_stock.png'
import nessHeadshot from './images/ness_headshot.png'
import nessStock from './images/ness_stock.png'
import yoshiHeadshot from './images/yoshi_headshot.png'
import yoshiStock from './images/yoshi_stock.png'
import kirbyHeadshot from './images/kirby_headshot.png'
import kirbyStock from './images/kirby_stock.png'
import foxHeadshot from './images/fox_headshot.png'
import foxStock from './images/fox_stock.png'
import CardList from './components/CardList'
import produce from 'immer'
import { setGameState, getGamesState } from './GameStateStorage'

const characterArray = [
  {headshotSrc: pikachuHeadshot, stockSrc: pikachuStock, stockCount: 4},
  {headshotSrc: luigiHeadshot, stockSrc: luigiStock, stockCount: 4},
  {headshotSrc: marioHeadshot, stockSrc: marioStock, stockCount: 4},
  {headshotSrc: dkHeadshot, stockSrc: dkStock, stockCount: 4},
  {headshotSrc: jigglypuffHeadshot, stockSrc: jigglypuffStock, stockCount: 4},
  {headshotSrc: linkHeadshot, stockSrc: linkStock, stockCount: 4},
  {headshotSrc: samusHeadshot, stockSrc: samusStock, stockCount: 4},
  {headshotSrc: falconHeadshot, stockSrc: falconStock, stockCount: 4},
  {headshotSrc: nessHeadshot, stockSrc: nessStock, stockCount: 4},
  {headshotSrc: yoshiHeadshot, stockSrc: yoshiStock, stockCount: 4},
  {headshotSrc: kirbyHeadshot, stockSrc: kirbyStock, stockCount: 4},
  {headshotSrc: foxHeadshot, stockSrc: foxStock, stockCount: 4}
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
