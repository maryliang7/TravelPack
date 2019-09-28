import { connect } from 'react-redux';
import PackAdd from './pack_add';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.user]
});


const mapDispatchToProps = (dispatch) => ({
  // getPacks
})

export default connect(mapStateToProps, mapDispatchToProps)(PackAdd);