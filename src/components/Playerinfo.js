import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
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
        console.log('After: ' + player.scoreArray[i]);
        // return (
        //   <CardSection>
        //     <Text>
        //       Hole {player.scoreArray[i] + 1}
        //     </Text>
        //   </CardSection>
        // )
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
          <CardSection>
            <Text>
              {name} - {this.totalScore(scoreArray) - 48}
            </Text>
          </CardSection>
          {this.renderScores()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedPlayerId === ownProps.player.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(PlayerInfo);
