import React from 'react';
//import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import PacksContainer from './pack/pack_container';
import PackShowContainer from './pack/pack_show_container';
import PackAddContainer from './pack/pack_add_container';
import PackFormContainer from './pack/pack_form_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import PhotoShowContainer from './photos/photo_show_container';
import ScheduleContainer from './schedule/schedule_container';

import './reset.css';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      {/* <ProtectedRoute path="/packs/:packId" component={PackShowContainer} /> */}
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/packs" component={PacksContainer} />
      <ProtectedRoute exact path="/packs/new" component={PackFormContainer} />
      <ProtectedRoute exact path="/packs/add" component={PackAddContainer} />
      <ProtectedRoute path="/packs/:packId" component={PackShowContainer} />

    </Switch>
  </div>
);

export default App;