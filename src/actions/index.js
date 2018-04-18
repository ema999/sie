import PlayerService from '../services/PlayerService'


export const filter = (players) => {
  return {
    type: 'FILTER',
    players
  }
}

export const changePosition = (position) => {
  return {
    type: 'CHANGE_POSITION',
    position
  }
}

export const filter_request = () => {
  return {
    type: 'FILTER_REQUEST',
  }
}

export const fetchPlayers = (filters) => {

  return dispatch => {
    dispatch(filter_request())
    return PlayerService.searchPlayers(filters, (players)=>{
      dispatch(filter(players))
    })
  }
  
}
