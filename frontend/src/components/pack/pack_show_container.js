import { connect } from 'react-redux';
import PackShow from './pack_show';
import { getUserPacks, getPack, updatePack } from '../../actions/pack_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
<<<<<<< HEAD
  let schedule;
  let currentUser = state.entities.users[state.session.user];
  let pack = state.entities.packs[ownProps.match.params.packId];
  if (pack) {
    schedule = Object.values(state.entities.packs[ownProps.match.params.packId].schedules)
  }
  
  return { currentUser, pack, schedule}
=======
  return ({
    currentUser: state.entities.users[state.session.user],
    pack: state.entities.packs[ownProps.match.params.packId]
  })
>>>>>>> 6b2acdb6d18861f4e9fbfb56a36465028a57cb9e
};


const mapDispatchToProps = (dispatch) => ({
  getUserPacks: (user) => dispatch(getUserPacks(user)),
  getPack: (id) => dispatch(getPack(id)),
  updatePack: (data) => dispatch(updatePack(data)),
  getMembers: (members) => dispatch(getMembers(members))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackShow)