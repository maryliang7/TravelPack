import { connect } from 'react-redux';
import { deletePhoto, fetchPhoto } from '../../actions/photo_actions'
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  return {
    // photos: ownProps.photos,
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: data => dispatch(fetchPhoto(data)),
  deletePhoto: data => dispatch(deletePhoto(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);