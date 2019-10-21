import React from 'react';
import { getPacks } from '../../util/pack_api_util';

export default class PackAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
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
          this.setState({  id: "", password: "" })
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
          <h3><i className="fas fa-users"></i>&nbsp;&nbsp;Join a Pack &nbsp;<i className="fas fa-users"></i></h3>
          <input type="text"
            value={this.state.id}
            onChange={this.handleInput('id')}
            placeholder="Pack Code"
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