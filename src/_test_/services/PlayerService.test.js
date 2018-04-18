import PlayerService from '../../services/PlayerService.js';

test('Get All players', () => {

  return PlayerService.getAllPlayers().then(data => {
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

});


test('Search Players', () => {
  let filters = {
    name: 'david',
    position: 'Keeper'
  }

  return new Promise((resolve, reject) => {
    PlayerService.searchPlayers(filters, data => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data[0].name).toEqual('David de Gea');
      resolve();
    });
  })

});
