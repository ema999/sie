import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FinderPlayer from '../../components/features/FinderPlayer/FinderPlayer';
import React from 'react';
import { mount, shallow } from 'enzyme';

const finderData = {
  players: [
    {
      contractUntil: "2022-06-30",
      dateOfBirth: "1993-05-13",
      jerseyNumber: 9,
      name: "Romelu Lukaku",
      nationality: "Belgium",
      position: "Centre-Forward"
    }
  ],
  position: 'Keeper'
};

const wrapper = mount(
  <FinderPlayer {...finderData} />,
  {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  }
);

test('FinderPlayer component renders inputs', () => {

  const buttonInput = wrapper.find('RaisedButton');
  const nameInput = wrapper.find('[floatingLabelText="Player Name"]');
  const ageInput = wrapper.find('[floatingLabelText="Age"]')

  expect(buttonInput.prop('type')).toEqual('submit');
  expect(nameInput.prop('name')).toBe('name');
  expect(ageInput.prop('name')).toBe('age');

});
