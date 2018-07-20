import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { HoleCardSection } from './common';
import * as actions from '../actions';
import _ from 'lodash';

class PlayerInfo extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderScores() {
    const { player, expanded } = this.props;

      if(expanded) {
        console.log('Before: ' + player.scoreArray);
        for (let i = 0; i < player.scoreArray.length; i ++) {
        return (
          <CardSection>
            <Text>
              Hole {player.scoreArray[i]}
            </Text>
          </CardSection>
        )
      }
    }
  }

  totalScore(array) {
    return _.sum(array);
  }

  render() {
    const { name, id, scoreArray } = this.props.player;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectPlayer(id)}>
        <View>
          <HoleCardSection>
            <Text style={styles.playerTextStyle}>{name}</Text>
            <Text style={styles.playerTextStyle}>
              {this.totalScore(scoreArray) - 48}
            </Text>
          </HoleCardSection>
          {this.renderScores()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  playerTextStyle: {
    fontSize: 24,
    fontWeight: '400',
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedPlayerId === ownProps.player.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(PlayerInfo);
