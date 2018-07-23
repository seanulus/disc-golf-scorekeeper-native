import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { HoleCardSection } from './common';
// import HoleInfo from './HoleInfo';

class HoleList extends Component {

  renderHoles() {
    const { name, id, scoreArray } = this.props.player;

    return scoreArray.map((score, index) =>
      <HoleCardSection key={index}>
        <Text style={styles.holeInfoStyle}>Hole {index + 1}</Text>
        <Text style={styles.holeInfoStyle}>{score}</Text>
      </HoleCardSection>
    );
  }

  render() {
    return (
      this.renderHoles()
    );
  }
}

const styles = {
  holeInfoStyle: {
    fontSize: 16,
    fontWeight: '400'
  }
}

const mapStateToProps = state => {
  return { players: state.players };
}

export default connect(mapStateToProps)(HoleList);
