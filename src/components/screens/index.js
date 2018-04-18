import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Players from './Players';

class Index extends Component {

  render() {
    return (
      <div className="Index">
        <Switch>
          <Route exact path='/' component={Players}/>
        </Switch>
      </div>
    );
  }
}

export default Index;
