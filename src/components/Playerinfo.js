import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Layout } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class PlayerInfo extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderScores() {
    const { player, expanded } = this.props;

    if(expanded) {
      return player.scoreArray.map(score =>
        <CardSection>
          <Text>Hole {score[i] + 1}  score</Text>
        </CardSection>
      );
    }
  }

  render() {
    return (

    );
  }
}

export default connect(mapStateToProps, actions)(PlayerList);
