import { connect } from 'react-redux';
import PackEdit from './pack_edit';
import { updatePack, leavePack, deletePack } from '../../actions/pack_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  pack: ownProps.pack
});


const mapDispatchToProps = (dispatch) => ({
  updatePack: (data) => dispatch(updatePack(data)),
  leavePack: (data) => dispatch(leavePack(data)),
  deletePack: (id) => dispatch(deletePack(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackEdit);