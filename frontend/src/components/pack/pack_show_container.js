import { connect } from 'react-redux';
import PackShow from './pack_show';
import { getUserPacks, getPack, updatePack } from '../../actions/pack_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let schedule;
  let currentUser = state.entities.users[state.session.user];
  let pack = state.entities.packs[ownProps.match.params.packId];
  if (pack) {
    schedule = Object.values(state.entities.packs[ownProps.match.params.packId].schedules)
  }
  
  return { currentUser, pack, schedule}
};


const mapDispatchToProps = (dispatch) => ({
  getUserPacks: (user) => dispatch(getUserPacks(user)),
  getPack: (id) => dispatch(getPack(id)),
  updatePack: (data) => dispatch(updatePack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackShow)