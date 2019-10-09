import { connect } from 'react-redux';
import { uploadPhoto, createPhoto } from '../../actions/photo_actions'
import PhotoUpload from './photo_upload';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  uploadPhoto: photo => dispatch(uploadPhoto(photo)),
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUpload);