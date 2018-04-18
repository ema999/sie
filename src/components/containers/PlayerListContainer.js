import { connect } from 'react-redux'
import PlayerList from '../features/PlayerList/PlayerList'

const mapStateToProps = (state) => {
  return {
    players: state.players.items,
    isLoading: state.players.playerIsFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const PlayerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default PlayerListContainer
