import React from 'react';

export default class PackForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: "",
      password: "",
      startDate: "",
      endDate: "",
      members: this.props.currentUser.id
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.createPack(this.state).then(() => {
      this.setState({name: "", password: "", startDate: "", endDate: ""})
    });
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    let name = this.props.currentUser.firstName + " " + this.props.currentUser.lastName
    return(
      <div className="pack-create">
        <form className="pack-create-form" onSubmit={this.handleSubmit}>
          <h3>Create a New Pack &nbsp;<i className="fas fa-paw"></i></h3>
          <input type="text"
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
          <label> Start Date &nbsp;
            <input type="date"
              value={this.state.startDate}
              onChange={this.handleInput('startDate')}
            />
          </label>
          <label> End Date &nbsp;&nbsp;
            <input type="date"
              value={this.state.endDate}
              onChange={this.handleInput('endDate')}
            />
          </label>
          <input type="submit" id="form-submit" value="Create" />
        </form>     
      </div>
    )
  }
}