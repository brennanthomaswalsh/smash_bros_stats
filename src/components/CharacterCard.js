import React, { Component } from 'react';
import './CharacterCard.css'
import CharacterHeadshot from "./CharacterHeadshot"
import { times } from "lodash"

function CharacterCard ({stockCount, headshotSrc, characterName, removeCharacterStock, resetCharacterStock, stockSrc}) {
  const stocks = []
  times(stockCount, () =>
    stocks.push(<CharacterHeadshot src={stockSrc}/>)
  )
  const stocksRemaining = stocks.length
  let deceased;

  if(stocksRemaining === 0){
    deceased = <div className="Deceased">Deceased</div>
  }

  return (
    <div className="character-card">
      <div className="character-head">
        <CharacterHeadshot src={headshotSrc}/>
      </div>
      <div className="stocks">
        <p>Stocks Remaining:</p>
        <div onClick={removeCharacterStock}> { stocks }</div>
        {deceased}
        <div onClick={resetCharacterStock}>RESET</div>
      </div>
    </div>
  );
}


export default CharacterCard;
