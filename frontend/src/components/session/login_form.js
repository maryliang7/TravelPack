import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../main/logo.png';
import '../main/main_page.css';
import './session.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-modal">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-form-text">
              <p>Welcome Back</p>
              <div className="login-errors">
                {this.renderErrors()}
              </div>
              <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Log In" />
            </div>
          </form>
        </div>

        <div className="splash">
          <div className="splash-logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <p>TravelPack</p>
          </div>
          <div className="splash-signup">
            <Link to={'/signup'}><button>Signup</button></Link>
          </div>
          <footer>
            Copyright &copy; 2019 TravelPack
          </footer>
        </div>
        
      </div>
    );
  }
}

export default withRouter(LoginForm);