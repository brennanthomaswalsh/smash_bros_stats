import React, { Component } from 'react';
import './CharacterCard.css'
import CharacterHeadshot from "./CharacterHeadshot"

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [1, 1, 1, 1]
    }
    this.removeStock = this.removeStock.bind(this);
    this.resetStock = this.resetStock.bind(this);
  }

  removeStock = () => {
    var array = [...this.state.stocks];
    array.splice(0, 1);
    console.log(array)
    this.setState({
      stocks: array
    })
  }

  resetStock = () => {
    this.setState({stocks: [1, 1, 1, 1]})
  }

  render() {
    const stocks = this.state.stocks.map(() =>
      { return (<CharacterHeadshot src={this.props.stockSrc}/> )}
    )
    const stocksRemaining = this.state.stocks.length
    let deceased;

    if(stocksRemaining === 0){
      deceased = <div className="Deceased">Deceased</div>
    }
    else {
      deceased = <div></div>
    }

    return (
      <div className="character-card">
        <div className="character-head">
          <CharacterHeadshot src={this.props.headshotSrc}/>
          <h2 className="character-name">{this.props.characterName}</h2>
        </div>
        <div className="stocks">
          <p>Stocks Remaining:</p>
          <div onClick={this.removeStock}> { stocks }</div>
          {deceased}
          <div onClick={this.resetStock}>RESET</div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
