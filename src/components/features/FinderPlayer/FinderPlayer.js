import React, { Component } from 'react';
import './FinderPlayer.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class FinderPlayer extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange(e) {
    this.props.onChangePosition(e.target.innerText);
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.onClickFilter(
      {
        name: e.target.elements.name.value,
        position: this.props.position,
        age: e.target.elements.age.value
      }
    );
  }

  render() {

    return (
      <div className="FinderPlayer">
        <h2>Football Player Finder</h2>
        <form onSubmit={ this.onSubmitForm }>
            <TextField
              floatingLabelText="Player Name"
              pattern="[A-Za-z]+"
              className="item"
              name="name"
            />
            <SelectField
              floatingLabelText="Position"
              value={this.props.position}
              onChange={this.handleChange}
              className="select item"
              name='position'
            >
              <MenuItem value='Keeper' primaryText="Keeper"/>
              <MenuItem value="Centre-Forward" primaryText="Centre-Forward"/>
              <MenuItem value="Centre-Back" primaryText="Centre-Back"/>
              <MenuItem value="Left-Back" primaryText="Left-Back"/>
              <MenuItem value="Right-Back" primaryText="Right-Back"/>
              <MenuItem value="Defensive Midfield" primaryText="Defensive Midfield"/>
              <MenuItem value="Central Midfield" primaryText="Central Midfield"/>
              <MenuItem value="Left Midfield" primaryText="Left Midfield"/>
              <MenuItem value="Attacking Midfield" primaryText="Attacking Midfield"/>
              <MenuItem value="Left Wing" primaryText="Left Wing"/>
            </SelectField>
            <TextField
              floatingLabelText="Age"
              className="item"
              name="age"
              min="18"
              max="40"
              type="number"
            />
            <RaisedButton label="Search" primary={true} className="itemButton" type="submit" />
        </form>
      </div>
    );
  }
}

export default FinderPlayer;
