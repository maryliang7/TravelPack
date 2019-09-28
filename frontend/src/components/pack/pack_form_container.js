import { connect } from 'react-redux';
import PackForm from './pack_form';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.user]
});


const mapDispatchToProps = (dispatch) => ({
  // getPacks
})

export default connect(mapStateToProps, mapDispatchToProps)(PackForm);