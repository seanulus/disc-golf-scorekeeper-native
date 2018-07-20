import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Input } from './common';

class NewPlayerForm extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.headerTextStyle}>Add A New Player</Text>
        <CardSection>
          <Input
            label='Name'
            placeholder='Name'
          />
        </CardSection>

        <CardSection>
          <Button>
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

export default NewPlayerForm;
