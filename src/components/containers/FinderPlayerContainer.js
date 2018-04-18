import { connect } from 'react-redux'
import { fetchPlayers, changePosition } from '../../actions'
import FinderPlayer from '../features/FinderPlayer/FinderPlayer'

const mapStateToProps = (state) => {
  return {
    players: state.players.items,
    position: state.players.position
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickFilter: (filters) => {
      dispatch(fetchPlayers(filters))
    },
    onChangePosition: (position) => {
      dispatch(changePosition(position))
    }
  }
}

const FinderPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinderPlayer)

export default FinderPlayerContainer
