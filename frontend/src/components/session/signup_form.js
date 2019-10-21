import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../main/logo.png';
import '../main/main_page.css';
import './session.css';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user).then(() => {
      if (!Object.keys(this.state.errors).length){
        this.props.login({ email: user['email'], password: user['password'] })
      }
    });
    
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
        <div className="signup-modal">
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <div className="signup-form-text">
              <p>Create an account</p>
              <div className="signup-errors">
                {this.renderErrors()}
              </div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First Name"
              />
              <input type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                placeholder="Last Name"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
              <br />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <div className="splash">
          <div className="splash-logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <p>TravelPack</p>
          </div>
          <div className="splash-signup">
            <Link to={'/login'}><button>Login</button></Link>
          </div>
          <footer>
            Copyright &copy; 2019 TravelPack
          </footer>
        </div>

      </div>
      
    );
  }
}

export default withRouter(SignupForm);