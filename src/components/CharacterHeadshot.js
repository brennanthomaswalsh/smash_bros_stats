import React, { Component } from 'react';
import './CharacterHeadshot.css'

class CharacterHeadshot extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <img className="character-headshot" src={this.props.src} alt="headshot" />
    );
  }
}

export default CharacterHeadshot;
