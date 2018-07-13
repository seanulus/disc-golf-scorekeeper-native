import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Disc Golf ScoreKeeper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'gray',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  }
});

export default Header;
