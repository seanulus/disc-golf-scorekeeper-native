import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';

class PlayerList extends Component {
  // componentWillMount() {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //
  //   this.dataSource = ds.cloneWithRows(this.props.players);
  // }
  //
  // renderRow(player) {
  //   return <ListItem player={player} />
  // }

  render() {
    return (
      <View>
        <Text>Player List</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { player: state.players };
}

export default connect(mapStateToProps)(PlayerList);
