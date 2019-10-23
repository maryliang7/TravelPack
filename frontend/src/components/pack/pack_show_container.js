import { connect } from 'react-redux';
import PackShow from './pack_show';
import { getUserPacks, getPack, updatePack } from '../../actions/pack_actions';
import { getMembers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let schedule;
  let currentUser = state.session.user;
  let pack = state.entities.packs[ownProps.match.params.packId];
  let members = state.entities.users
  if (pack) {
    schedule = Object.values(state.entities.packs[ownProps.match.params.packId].schedules)
  }
  
  return { currentUser, pack, schedule, members}
};


const mapDispatchToProps = (dispatch) => ({
  getUserPacks: (user) => dispatch(getUserPacks(user)),
  getPack: (id) => dispatch(getPack(id)),
  updatePack: (data) => dispatch(updatePack(data)),
  getMembers: (members) => dispatch(getMembers(members))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackShow)