import React from 'react';

class PhotoUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      photo: null,
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[photo]', this.state.photoFile);
    
    if (this.state.title.length !== 0 && this.state.photoFile !== null){
      this.setState({ loading: true});
      this.props.createPhoto(formData)
      .then(
        () => {
          console.log(formData);
          this.setState({ loading: false });
          this.props.history.push('/');
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

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let uploadButton = this.state.loading ?
    <button className="loading-button" onClick={this.handleSubmit} disabled >
      Uploading
    </button> :
    <button className="upload-button" onClick={this.handleSubmit} >
      Post
    </button>;

    return(
      <div>
        <form>
          <input type="text" placeholder="Video Description" onChange={this.update('title')} />
          <input type="file" accept="image/png, image/jpeg" onChange={this.updateThumbnail} />
          {uploadButton}
        </form>
      </div>
    );
  }
}

export default PhotoUpload