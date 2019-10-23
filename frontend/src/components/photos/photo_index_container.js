import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: Object.values(state.entities.photos)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: packId => dispatch(fetchPhotos(packId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);