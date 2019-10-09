import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../main/logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      // this.props.receiveCurrentUser()
      this.props.getUserPacks(this.props.currentUser.id)
    }
  }

  componentDidUpdate(prevProps) {
    if ((!prevProps.loggedIn && this.props.loggedIn) || (prevProps.loggedIn && !this.props.loggedIn)) {
      if (this.props.currentUser) {
        this.props.getUserPacks(this.props.currentUser.id)
      } else {
        this.props.removePacks();
      }
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {
    if (!this.props.packs || !this.props.loggedIn) {
      return null;
    }
    if (this.props.loggedIn) {
      return (
        <div className="sidebar">
          <div className="side-header">
            <Link to="/packs"><img src={logo} alt="logo" /></Link>
            <p>
              {this.props.currentUser.firstName}&nbsp;{this.props.currentUser.lastName}
            </p>
          </div>
          <div className="side-packs">
            {this.props.packs.map(pack => <Link key={pack._id} to={`/packs/${pack._id}`}><li key={pack._id}>{pack.name}</li></Link>)}
          </div>
          <div className="side-logout">
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      );
    } 
  }
}

export default NavBar;