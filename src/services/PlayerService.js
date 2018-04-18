
class PlayerService {

  static getInitialState(callback) {

    this.getAllPlayers().then(data => {

      callback({
        players: {
            items: data
        }
      });

    })

  }

  static getAllPlayers() {

    const request = new Request('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', {
      method: 'GET'
    })

    return fetch(request)
    .then(response => {

      return response.json();

    })
    .then(data => {

      return data

    })
  }

  static searchPlayers(filters, callback) {

    this.getAllPlayers().then(data => {
      if (!filters.name && !filters.position && !filters.age) return callback(data)
      let players = [];

      if (filters.name) {
        players = data.filter(player => {
          return player.name.toUpperCase().indexOf(filters.name.toUpperCase()) > -1;
        })

      }

      if (filters.position) {
        if (players.length) { data = players}

        players = data.filter(player => {
          return player.position.toUpperCase() === filters.position.toUpperCase();
        })
      }

      if (filters.age) {
        if (players.length) { data = players}

        players = data.filter(player => {
          let year = player.dateOfBirth.split("-")[0];
          let d = new Date();
          let old = d.getFullYear() - year;
          return old.toString() === filters.age;
        })
      }

      callback(players);
    })

  }

}

export default PlayerService;
