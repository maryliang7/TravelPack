import React from 'react';
//import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import PacksContainer from './pack/pack_container';
import PackShowContainer from './pack/pack_show_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


import './reset.css';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/packs" component={PacksContainer} />
      <ProtectedRoute path="/packs/:packId" component={PackShowContainer} />
    </Switch>
  </div>
);

export default App;