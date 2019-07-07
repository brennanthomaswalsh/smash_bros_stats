import React, { Component, Fragment } from 'react';
import CharacterCard from './CharacterCard';
import { times } from "lodash"


function CardList ({ playerNumber, cards, removeStock, resetStock, switchCa }) {
  var totalStocksRemaining = 0;
  let loser;
  const stocks = cards.map((elem, i) =>
    {
      const removeCharacterStock = () =>
        removeStock(i, playerNumber)
      const resetCharacterStock = () =>
        resetStock(i, playerNumber)
      const switchCharacter = () =>
        switchCa(i, playerNumber)
      totalStocksRemaining = totalStocksRemaining + elem.stockCount
      return (
        <CharacterCard
          headshotSrc={elem.headshotSrc}
          characterName={elem.characterName}
          stockSrc={elem.stockSrc}
          stockCount={elem.stockCount}
          removeCharacterStock={removeCharacterStock}
          resetCharacterStock={resetCharacterStock}
          switchCharacter={switchCharacter}
        />
      )
    }
  )
  if(totalStocksRemaining === 0){
    loser = <div className='loser'>You Lost!</div>
  }
  return (
    <Fragment>
      {stocks}
      <div>
        Total Stocks Remaining:
          {totalStocksRemaining}
      </div>
      { loser }
    </ Fragment>
  );
}

export default CardList;
