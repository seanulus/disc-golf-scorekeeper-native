import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Input } from './common';
import { nameChanged, playerCreate } from '../actions';

class NewPlayerForm extends Component {

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onButtonPress() {
    const { name } = this.props;
    
    this.props.playerCreate({ name });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.headerTextStyle}>Add A New Player</Text>
        <CardSection>
          <Input
            label='Name'
            placeholder='Name'
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Player
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => Actions.playerList()}>
            Continue
          </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const mapStateToProps = ({ playerName }) => {
  const { name } = playerName;

  return { name }
}

export default connect(mapStateToProps, { nameChanged, playerCreate })(NewPlayerForm);
