import React from 'react';
import { getPacks } from '../../util/pack_api_util';

export default class PackAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    getPacks(this.state).then(res => {
      if (res.data instanceof Object) {
        console.log(res)
      } else {
        this.props.updatePack({ id: res.data, members: this.props.currentUser.id })
        .then(() => {
          this.setState({  name: "", password: "" })
        })
        .catch(err => console.log(err))
      }
    })
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return (
      <div className="pack-add">
        <form className="pack-add-form" onSubmit={this.handleSubmit}>
          <h3>Join a Pack &nbsp;<i className="fas fa-users"></i></h3>
          <input type="text"
            value={this.state.name}
            onChange={this.handleInput('name')}
            placeholder="Pack Name"
          />
          <input type="text"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password"
          />
          <input id="form-add-submit" type="submit" value="Join" />
        </form>
      </div>
    )
  }
}