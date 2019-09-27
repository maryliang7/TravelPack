import { connect } from 'react-redux';
import Pack from './pack';
import { getUserPacks } from '../../actions/pack_actions';

const mapStateToProps = (state) => ({
  currentUser = state.entities.users[entities.session.user]
});


const mapDispatchToProps = (dispatch) => ({
  getUserPacks: (user) => dispatch(getUserPacks(user)),
  updatePack: (data) => dispatch(updatePack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pack)