import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => {
  console.log(state);
  return {
  // photos: Object.values(state.packs.photos)
}};

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);