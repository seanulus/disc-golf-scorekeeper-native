import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { HoleCardSection } from './common';
import { decrementScore, incrementScore } from '../actions';


class HoleList extends Component {



  onDecrementScore(index) {
    const { scoreArray, name } = this.props.player;
    // console.log('Player name: ' + name + ' This is the score of the index: ' + scoreArray[index] + ' This is the index in the array: ' + index + ' This is a decrement: ' + (scoreArray[index] -= 1));
    return decrementScore(scoreArray, index);
  }

  onIncrementScore(index) {
    const { scoreArray, name } = this.props.player;

    return incrementScore(scoreArray, index);
  }

  scoreDown(index) {
    this.onDecrementScore(index);
    this.forceUpdate();
  }

  scoreUp(index) {
    this.onIncrementScore(index);
    this.forceUpdate();
  }

  renderHoles() {
    const { name, id, scoreArray } = this.props.player;

    return scoreArray.map((score, index) => {
      return (
        <HoleCardSection key={index}>
          <Text style={styles.holeInfoStyle}>Hole {index + 1}</Text>

          <Text style={styles.parStyle}>Par 3</Text>

          <Text style={[styles.scoreStyle, styles.buttonStyle]} onPress={() => this.scoreDown(index)}>-</Text>

          <Text style={styles.scoreStyle}>{score}</Text>

          <Text style={[styles.scoreStyle, styles.buttonStyle]} onPress={() => this.scoreUp(index)}>+</Text>
        </HoleCardSection>
      )
    });
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

// const mapStateToProps = ({ players }) => {
//   const { playerList } = players;
//
//   return { playerList };
// }

export default connect(null, { decrementScore, incrementScore })(HoleList);
