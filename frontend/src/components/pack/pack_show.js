import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScheduleContainer from '../schedule/schedule_container';
import ScheduleFormCreateContainer from '../schedule/schedule_form_create_container';
import PaymentsIndexContainer from '../payments/payments_index_container';
import CreatePaymentFormContainer from '../payments/create_payment_form_container';

export default class PackShow extends React.Component {

  componentDidMount() {
    this.props.getPack(this.props.match.params.packId);
  }
  render() {
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
              exact path="/packs/:packId/payments"
              render={() => <PaymentsIndexContainer pack={pack} payments={pack.payments} />}
            />
            <Route
              exact path="/packs/:packId/payments/new"
              render={() => <CreatePaymentFormContainer pack={pack} />}
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
            />
            <Route
              path="/packs/:packId/photos/:photoId"
              render={(props) => <PhotoContainer props={props} packId={pack.id} photos={pack.photos} />}
            />
            <Route
              path="/packs/:packId/photos/new"
              render={(props) => <PhotoFormContainer props={props} packId={pack.id} photos={pack.photos} />}
            /> */}
          </Switch>
        </div>

      </div>
    )
  }
}