import React from 'react';
import { View } from 'react-native';

const HoleCardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderColor: '#DDD',
    position: 'relative',
  }
};

export { HoleCardSection };
