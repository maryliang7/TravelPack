import React from 'react';
//import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import ScheduleContainer from './schedule/schedule_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/packs" component={PacksContainer} /> */}
      {/* <ProtectedRoute exact path="/packs/:packId" component={PacksIndexContainer} /> */}
      {/* <ProtectedRoute path="/upload" component={PhotoUploadContainer} /> */}
      <Route path="/upload" component={PhotoUploadContainer} />
      <Route path="/schedules" component={ScheduleContainer} />

    </Switch>
  </div>
);

export default App;