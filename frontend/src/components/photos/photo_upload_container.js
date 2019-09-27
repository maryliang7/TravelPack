import { connect } from 'react-redux';
import { uploadPhoto } from '../../actions/photo_actions'
import PhotoUpload from './photo_upload';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  uploadPhoto: photo => dispatch(uploadPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);