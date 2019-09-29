import { connect } from 'react-redux';
import PackShow from './pack_show';
import { getUserPacks, getPack, updatePack } from '../../actions/pack_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    currentUser: state.entities.users[state.session.user],
    pack: state.entities.packs[ownProps.match.params.packId]
  })
};


const mapDispatchToProps = (dispatch) => ({
  getUserPacks: (user) => dispatch(getUserPacks(user)),
  getPack: (id) => dispatch(getPack(id)),
  updatePack: (data) => dispatch(updatePack(data)),
  getMembers: (members) => dispatch(getMembers(members))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackShow)