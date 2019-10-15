import { connect } from 'react-redux';
import PackAdd from './pack_add';
import { updatePack } from '../../actions/pack_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.user
});


const mapDispatchToProps = (dispatch) => ({
  // getPack: (data) => dispatch(getPack(data)),
  updatePack: (data) => dispatch(updatePack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackAdd);