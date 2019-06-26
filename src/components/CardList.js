import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const stocks = this.props.cards.map((elem) =>
      { return (<CharacterCard headshotSrc={elem.headshotSrc} characterName={elem.characterName} stockSrc={elem.stockSrc} /> )}
    )
    return (
      <React.Fragment>
        {stocks}
      </ React.Fragment>
    );
  }
}

export default CardList;
