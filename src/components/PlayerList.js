import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import PlayerInfo from './PlayerInfo';

class PlayerList extends Component {

  componentWillMount() {
    console.log('Inside will mount: ' + this.props.playerList)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.playerList);
  }

  renderRow(player) {
    console.log('Inside renderRows: ' + player)
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

const mapStateToProps = ({ players }) => {
  const { playerList } = players;
  console.log('Inside mapStateToProps ' + JSON.stringify({playerList}))
  return { playerList }
}

export default connect(mapStateToProps)(PlayerList);
