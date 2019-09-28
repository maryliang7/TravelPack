import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUserPacks } from '../../actions/pack_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.entities.users[state.session.user]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout),
  getUserPacks
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);