import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import PlayerInfo from './PlayerInfo';

class PlayerList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.players);
  }

  renderRow(player) {
    return <PlayerInfo player={player} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />

    );
  }
}

const mapStateToProps = state => {
  return { players: state.players };
}

export default connect(mapStateToProps)(PlayerList);
