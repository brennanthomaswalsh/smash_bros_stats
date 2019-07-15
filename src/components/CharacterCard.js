import React, { Component } from 'react';
import './CharacterCard.css'
import CharacterHeadshot from "./CharacterHeadshot"
import { times } from "lodash"

function CharacterCard ({stockCount, headshotSrc, characterName, removeCharacterStock, resetCharacterStock, stockSrc, switchCharacter}) {
  const stocks = []
  times(stockCount, () =>
    stocks.push(<CharacterHeadshot src={stockSrc}/>)
  )
  const stocksRemaining = stocks.length
  let deceased;
  let switchChar = <button className="character-switch" onClick={switchCharacter}><p>Switch Character</p></button>
  if(stocksRemaining === 0){
    deceased = 'deceased'
  }
  if(stocksRemaining < 4){
    switchChar = null
  }

  return (
    <div className={"character-card " + deceased}>
      <div className="character-head">
        <CharacterHeadshot src={headshotSrc}/>
      </div>
      <div className="stocks">
        <p>Stocks Remaining:</p>
        <div onClick={removeCharacterStock}> { stocks }</div>
        <button onClick={resetCharacterStock}>RESET</button>
      </div>
      { switchChar }
    </div>
  );
}


export default CharacterCard;
