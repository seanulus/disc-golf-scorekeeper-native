import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { HoleCardSection, CardSection } from './common';
import * as actions from '../actions';
import _ from 'lodash';
import HoleList from './HoleList';

class PlayerInfo extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.player.scoreArray)
    console.log(nextProps.player.scoreArray)
    return true;
    // return nextProps.player.scoreArray !== this.props.player.scoreArray;
  }

  renderScores() {
    const { player, expanded } = this.props;

      if(expanded) {
        return <HoleList player={player}/>;
    }
  }

  totalScore(array) {
    return _.sum(array);
  }

  render() {
    console.log(this.props.player)
    const { name, id, scoreArray } = this.props.player;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectPlayer(id)}>
        <View style={styles.containerStyle}>
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
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 3
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedPlayerId === ownProps.player.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(PlayerInfo);
