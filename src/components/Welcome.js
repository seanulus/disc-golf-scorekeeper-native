import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';

const Welcome = () => {
  return (
    <View style={styles.welcomeStyle}>
      <Text style={styles.welcomeTextStyle}>Welcome to Rllr</Text>
      <Text>A disc golf score keeper</Text>
      <Button />
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
  }
}

export default Welcome;
