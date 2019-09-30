import { connect } from 'react-redux';
import Pack from './pack';
import { getUserPacks, updatePack } from '../../actions/pack_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.user]
});


const mapDispatchToProps = (dispatch) => ({
  getUserPacks: (user) => dispatch(getUserPacks(user)),
  updatePack: (data) => dispatch(updatePack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pack)