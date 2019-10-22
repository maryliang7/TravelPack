import React from 'react';
import FormData from 'form-data';
import merge from 'lodash/merge';
import { fileURLToPath } from 'url';
import './photo_upload.css'

class PhotoUpload extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      title: '',
      photo: null,
      photoFile: null,
      loading: false,
      packId: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  componentDidMount(){
    this.setState({
      packId: this.props.props.match.params.packId,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.photoFile);
    
    //EXTRACT JUST THE FILL NAME FROM THE FILE INPUT//
    let fullPath = document.getElementById('photo-input').value;
    let filename;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }
    this.state.title = filename;
    
    if (this.state.photoFile !== null){
      this.setState({ loading: true});
      const photo = merge({}, this.state);
      this.props.createPhoto(photo);
      this.props.uploadPhoto(formData)
      .then(
        () => {
          // console.log(formData);
          this.setState({ loading: false });
          this.props.props.history.push(`/packs/${this.state.packId}/photos/all`);
        },
      )
    } else {
      console.log("Upload unsuccessful");
    }
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  updatePhoto(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ photo: reader.result, photoFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {

    let uploadButton = this.state.loading ?
    <button className="loading-button" onClick={this.handleSubmit} disabled >
      <div className="loader"></div>
    </button> :
    <button className="upload-button" onClick={this.handleSubmit} >
      Post
    </button>;

    let uploadText = this.state.photo?
      <span>Photo Uploaded <i className="fas fa-check"></i></span> :
      <span>Select Photo to Upload</span>

    let photoPreview = this.state.photo?
      <div className="preview-wrapper"><img src={this.state.photo} width="300px" height="200px" /></div> :
      <div className="preview-placeholder">Photo Preview</div>

    return(
      <div className="photo-upload-outer-wrapper">
        <form>

          <div className="input-upload">
            <label htmlFor="photo-input">
              <i className="fas fa-file-image fa-6x"></i>
            </label>
            <div className="upload-text">{uploadText}</div>
            <input className="inputfile" id="photo-input" type="file" accept="image/png, image/jpeg" onChange={this.updatePhoto} / >
          </div>
          
          {uploadButton}
        </form>

        <div className="photo-preview">{photoPreview}</div>
      </div>
    );
  }
}

export default PhotoUpload;