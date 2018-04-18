import React, { Component } from 'react';
import FinderPlayerContainer from '../containers/FinderPlayerContainer';
import PlayerListContainer from '../containers/PlayerListContainer';

class Players extends Component {
  render() {
    return (
      <div className="Players">
        <FinderPlayerContainer />
        <PlayerListContainer />
      </div>
    );
  }
}

export default Players;
