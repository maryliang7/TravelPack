import { connect } from 'react-redux';
import PackForm from './pack_form';
import { createPack } from '../../actions/pack_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.user]
});


const mapDispatchToProps = (dispatch) => ({
  createPack: (data) => dispatch(createPack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackForm);