import React from 'react';
import WolfCrop from './wolf-back-crop.png';
import { Link } from 'react-router-dom';


export default class PackEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.pack._id,
      name: this.props.pack.name,
      password: this.props.pack.password,
      startDate: this.props.pack.startDate,
      endDate: this.props.pack.endDate
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updatePack(this.state).then(() => {
      this.props.props.history.push(`/packs/${this.props.pack._id}`)
    });
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleLeave() {
    this.props.leavePack({pack: this.props.pack._id, user: this.props.currentUser.id}).then(() => {
      this.props.props.history.push(`/packs`);
    });
  } 

  handleDelete() {
    this.props.deletePack(this.props.pack._id).then(() => {
      this.props.props.history.push(`/packs`);
    })
  }

  render() {
    let name = this.props.currentUser.firstName + " " + this.props.currentUser.lastName
    let startD = this.state.startDate.split("T")[0];
    let endD = this.state.endDate.split("T")[0];
    const deleteButton = this.props.pack.packLeader === this.props.currentUser.id ? (
      <button onClick={() => this.handleDelete()}>Delete Pack</button>
    ) : (<button id="disabled">Delete Pack</button> )


    return(
      <div className="pack-edit">
        <img id="wolf-crop" src={WolfCrop} alt="" />
        <Link to={`/packs/${this.props.pack._id}`}>
          <i className="fas fa-chevron-left"></i>
        </Link>
        <div className="pack-create">
          <form className="pack-create-form" onSubmit={this.handleSubmit}>
            <h3 id="edit-title"><i className="fas fa-paw"></i>&nbsp;&nbsp;Edit Pack &nbsp;<i className="fas fa-paw"></i></h3>
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
                value={startD}
                onChange={this.handleInput('startDate')}
              />
            </label>
            <label> End Date &nbsp;&nbsp;
              <input type="date"
                value={endD}
                onChange={this.handleInput('endDate')}
              />
            </label>
            <input type="submit" id="form-submit" value="Save" />
          </form>
        </div>
        <div className="edit-buttons">
          {deleteButton}
          <button onClick={() => this.handleLeave()}>Leave Pack</button>
        </div>
      </div>
    )
  }
}