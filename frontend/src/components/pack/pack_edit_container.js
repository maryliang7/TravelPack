import { connect } from 'react-redux';
import PackEdit from './pack_edit';
import { updatePack } from '../../actions/pack_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  pack: ownProps.pack
});


const mapDispatchToProps = (dispatch) => ({
  updatePack: (data) => dispatch(updatePack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackEdit);