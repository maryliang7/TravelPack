import React from 'react';
import './main_page.css'
import { Link } from 'react-router-dom'
import logo from './logo.png';
// import PacksContainer from '../packs/packs_container'


class MainPage extends React.Component {
  render() {
    let { loggedIn } = this.props;

    if (!loggedIn) {
      return (
        <div className="splash">
          <div className="splash-logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <div className="splash-signup">
            <Link to={'/signup'}><button>Signup</button></Link>
            <Link to={'/login'}><button>Login</button></Link>
          </div>
          <div className="splash-text">
            <h1>TravelPack</h1>
            <p> Create. Collaborate. Travel.</p>
          </div>
          <footer>
            Copyright &copy; 2019 TravelPack
          </footer>
        </div>
      );
    } else {
      return (
        <div>
          {/* <PacksContainer /> */}
          hello from main page
          <footer>
            Copyright &copy; 2019 TravelPack
          </footer>
        </div>
      )
    }
  }
}

export default MainPage;