import React, { Component } from 'react';
import './CharacterCard.css'
import CharacterHeadshot from "./CharacterHeadshot"
import { times } from "lodash"

class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stocks = []
    times(this.props.stockCount, () =>
      stocks.push(<CharacterHeadshot src={this.props.stockSrc}/>)
    )
    const stocksRemaining = stocks.length
    let deceased;

    if(stocksRemaining === 0){
      deceased = <div className="Deceased">Deceased</div>
    }

    return (
      <div className="character-card">
        <div className="character-head">
          <CharacterHeadshot src={this.props.headshotSrc}/>
          <h2 className="character-name">{this.props.characterName}</h2>
        </div>
        <div className="stocks">
          <p>Stocks Remaining:</p>
          <div onClick={this.props.removeStock}> { stocks }</div>
          {deceased}
          <div onClick={this.props.resetStock}>RESET</div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
