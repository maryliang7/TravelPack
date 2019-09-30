import { connect } from 'react-redux';
import { deletePhoto, fetchPhoto } from '../../actions/photo_actions'
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: ownProps.photos,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);