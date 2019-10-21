import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { getUserPacks, removePacks } from '../../actions/pack_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
  let loggedIn = state.session.isAuthenticated;
  let currentUser = state.session.user;
  let packs = Object.values(state.entities.packs);

  return { loggedIn, currentUser, packs }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUserPacks: (userId) => dispatch(getUserPacks(userId)),
  removePacks: () => dispatch(removePacks())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar));