import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';

const Welcome = () => {
  return (
    <View style={styles.welcomeStyle}>
      <Card>
        <Text style={styles.welcomeTextStyle}>Welcome to Rllr</Text>
        <Text style={styles.smallTextStyle}>A disc golf score keeper</Text>
        <CardSection>
          <Button onPress={() => Actions.addPlayer()}>
            Get Started
          </Button>
        </CardSection>
      </Card>
    </View>
  );
}

const styles = {
  welcomeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  welcomeTextStyle: {
    fontSize: 40,
    fontWeight: '600',
  },
  smallTextStyle: {
    textAlign: 'center',
    marginBottom: 30
  }
}

export default Welcome;
