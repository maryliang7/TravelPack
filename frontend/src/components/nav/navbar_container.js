import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUserPacks } from '../../actions/pack_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
  // debugger
  let loggedIn = state.session.isAuthenticated;
  let currentUser = state.session.user;
  let packs = Object.values(state.entities.packs);

  return { loggedIn, currentUser, packs }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUserPacks: (userId) => dispatch(getUserPacks(userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);