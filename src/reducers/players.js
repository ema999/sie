const players = (state = [], action) => {

  switch (action.type) {
    case 'CHANGE_POSITION':
      return Object.assign({}, state, {position: action.position});
    case 'FILTER_REQUEST':
      return Object.assign({}, state, {playerIsFetching: true});
    case 'FILTER':
      return Object.assign({}, state, {items: action.players, playerIsFetching: false});
    default:
      return state
  }

}


export default players
