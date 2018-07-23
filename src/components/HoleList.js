import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { HoleCardSection } from './common';
// import HoleInfo from './HoleInfo';

class HoleList extends Component {

  renderHoles() {
    const { name, id, scoreArray } = this.props.player;
    console.log(name);

    return scoreArray.map(score =>
      <HoleCardSection>
        <Text>{score}</Text>
      </HoleCardSection>
    );
  }

  render() {
    return (
      this.renderHoles()
    );
  }
}

const mapStateToProps = state => {
  return { players: state.players };
}

export default connect(mapStateToProps)(HoleList);
