import React, { Component } from 'react';
import './PlayerList.css';
import notFoundImg from '../../../404.jpg';
import Player from '../Player/Player'
import CircularProgress from 'material-ui/CircularProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

class PlayerList extends Component {

  render() {
    let notFound = !this.props.players || !this.props.players.length ? (<div><h2>404</h2><img src={notFoundImg} className="notFoundImg" alt="404"/></div>) : null;
    let loading = this.props.isLoading ? (<CircularProgress/>): null;
    return (
      <div className="PlayerList">
        {notFound || loading ||
        <Table selectable={false}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Position</TableHeaderColumn>
              <TableHeaderColumn>Team</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.players.map(player =>
              <Player
                key={player.name}
                {...player}
              />
            )}
          </TableBody>
        </Table>}
      </div>
    );
  }

}

export default PlayerList;
