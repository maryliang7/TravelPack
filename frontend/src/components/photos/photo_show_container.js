import { connect } from 'react-redux';
import { deletePhoto, fetchPhoto } from '../../actions/photo_actions'
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  console.log("PHOTO SHOW CONTAINER:");
  console.log(ownProps.match.params.photoId);
  return {
    photo: state.entities.photos[ownProps.match.params.photoId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);