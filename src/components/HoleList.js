import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { HoleCardSection } from './common';
// import HoleInfo from './HoleInfo';

class HoleList extends Component {

  decrementScore(index) {
    const { scoreArray } = this.props.player;
    console.log('In decrement function: ' + scoreArray[index] + ' This is the index: ' + index + ' This is a decrement: ' + (scoreArray[index] -= 1));
    return scoreArray[index] - 1;
  }

  renderHoles() {
    const { name, id, scoreArray } = this.props.player;

    return scoreArray.map((score, index) =>
      <HoleCardSection key={index}>
        <Text style={styles.holeInfoStyle}>Hole {index + 1}</Text>
        <Text style={styles.parStyle}>Par 3</Text>
        <Text style={[styles.scoreStyle, styles.buttonStyle]} onPress={() => this.decrementScore(index)}>-</Text>
        <Text style={styles.scoreStyle}>{score}</Text>
        <Text style={[styles.scoreStyle, styles.buttonStyle]} onPress={() => console.log('increment')}>+</Text>
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
    fontWeight: '400',
    flex: 2
  },
  scoreStyle: {
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    textAlign: 'center'
  },
  parStyle: {
    fontSize: 16,
    fontWeight: '400',
    flex: 3
  },
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  }
}

const mapStateToProps = state => {
  return { players: state.players };
}

export default connect(mapStateToProps)(HoleList);
