import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScheduleContainer from '../schedule/schedule_container';
import ScheduleFormCreateContainer from '../schedule/schedule_form_create_container';
import PhotoIndexContainer from '../photos/photo_index_container';
import PhotoUploadContainer from '../photos/photo_upload_container';

export default class PackShow extends React.Component {

  componentDidMount() {
    this.props.getPack(this.props.match.params.packId);
  }
  render() {
    // debugger
    let { pack } = this.props;

    if (!pack) {
      return null;
    }
    return(
      <div>
        <div>
          hello
        </div>
        <div>
          <Switch>
            <Route
              path="/packs/:packId/schedules/:scheduleId"
              render={(props) => <ScheduleContainer props={props} packId={pack.id} schedules={pack.schedules} />}
            />
            <Route
              path="/packs/:packId/photos/all"
              render={(props) => <PhotoIndexContainer props={props} pack={pack} photos={pack.photos} />}
            />
            <Route
              path="/packs/:packId/photos/upload"
              render={(props) => <PhotoUploadContainer props={props} packId={pack.id} photos={pack.photos} />}
            /> 
            {/* <Route
              path="/packs/:packId/schedules/new"
              render={(props) => <ScheduleFormCreateContainer props={props} packId={pack.id} schedules={pack.schedules} />}
            />
            <Route
              path="/packs/:packId/payments/:paymentId"
              render={(props) => <PaymentContainer props={props} packId={pack.id} payments={pack.payments} />}
            />
            <Route
              path="/packs/:packId/payments/new"
              render={(props) => <PaymentFormContainer props={props} packId={pack.id} payments={pack.payments} />}
            />*/}
          </Switch>
        </div>

      </div>
    )
  }
}