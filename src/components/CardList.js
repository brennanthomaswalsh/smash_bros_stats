import React, { Component, Fragment } from 'react';
import CharacterCard from './CharacterCard';
import { times } from "lodash"


function CardList ({ playerNumber, cards, removeStock, resetStock }) {
  var totalStocksRemaining = 0;
  const stocks = cards.map((elem, i) =>
    {
      const removeCharacterStock = () =>
        removeStock(i, playerNumber)
      const resetCharacterStock = () =>
        resetStock(i, playerNumber)
      totalStocksRemaining = totalStocksRemaining + elem.stockCount
      return (
        <CharacterCard
          headshotSrc={elem.headshotSrc}
          characterName={elem.characterName}
          stockSrc={elem.stockSrc}
          stockCount={elem.stockCount}
          removeCharacterStock={removeCharacterStock}
          resetCharacterStock={resetCharacterStock}
        />
      )
    }
  )
  return (
    <Fragment>
      {stocks}
      <div>
        Total Stocks Remaining:
          {totalStocksRemaining}
      </div>
    </ Fragment>
  );
}

export default CardList;
