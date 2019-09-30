import React from 'react';

export default class PackForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      packLeader: "",
      name: "",
      password: "",
      startDate: "",
      endDate: "",
      members:""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      members: this.props.currentUser._id
    }, () => {
      this.props.createPack(this.state)
    })
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    let name = this.props.currentUser.firstName + " " + this.props.currentUser.lastName
    return(
      <div className="pack-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.packLeader}
            placeholder={name}
            disabled
          />
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
          <label> Start Date
            <input type="date"
              value={this.state.startDate}
              onChange={this.handleInput('startDate')}
            />
          </label>
          <label> End Date
            <input type="date"
              value={this.state.endDate}
              onChange={this.handleInput('endDate')}
            />
          </label>
        </form>     
      </div>
    )
  }
}