import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Player from '../../components/features/Player/Player';
import React from 'react';
import { mount } from 'enzyme';

const playerData = {
    contractUntil: "2022-06-30",
    dateOfBirth: "1993-05-13",
    jerseyNumber: 9,
    name: "Romelu Lukaku",
    nationality: "Belgium",
    position: "Centre-Forward"
};

const wrapper = mount(
  <Player {...playerData} />,
  {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  }
);

test('Player component render', () => {

  const name = wrapper.find('[data-test="name"]');
  const position = wrapper.find('[data-test="position"]');
  const nationality = wrapper.find('[data-test="nationality"]');

  expect(name.first().text()).toBe('Romelu Lukaku');
  expect(position.first().text()).toBe('Centre-Forward');
  expect(nationality.first().text()).toBe('Belgium');

});
