import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions'
import PhotoUpload from './photo_upload';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);