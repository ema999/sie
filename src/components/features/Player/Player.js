import React, { Component } from 'react';
import './Player.css';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class Player extends Component {
  render() {
    return (

        <TableRow>
          <TableRowColumn data-test="name">{this.props.name}</TableRowColumn>
          <TableRowColumn data-test="position">{this.props.position}</TableRowColumn>
          <TableRowColumn data-test="nationality">{this.props.nationality}</TableRowColumn>
        </TableRow>

    );
  }
}

export default Player;
