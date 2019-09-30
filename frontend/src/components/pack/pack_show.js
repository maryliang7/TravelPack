import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScheduleContainer from '../schedule/schedule_container';
import ScheduleFormCreateContainer from '../schedule/schedule_form_create_container';
import PaymentsIndexContainer from '../payments/payments_index_container';
import CreatePaymentFormContainer from '../payments/create_payment_form_container';
import PhotoIndexContainer from '../photos/photo_index_container';
import PhotoUploadContainer from '../photos/photo_upload_container'; 
import PaymentBreakdown from '../payments/payment_breakdown';
import InnerNavBar from '../nav/inner_navbar';

import './pack_show.css';
export default class PackShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getPack(this.props.match.params.packId).then( () => {
      if (this.props.pack && Object.values(this.props.pack).length) {
        debugger
        this.props.getMembers({ members: this.props.pack.members.join("")})
      }
    });
  }
  render() {
    let { pack, schedule, members } = this.props;

    if (!pack) {
      return null;
    }
    let redirect;
    // debugger
    if (this.props.history.location && !this.props.history.location.pathname.includes("schedules")) {
      redirect = (schedule.length) ? (
        this.props.history.push(`/packs/${pack._id}/schedules/${schedule[0]._id}`) 
      ) : (
        this.props.history.push(`/packs/${pack._id}/schedules/new`) 
      )
    }

    return(
      <div>
        <div className="pack-show">
          {redirect}
        </div>
        <Route
          path="/packs/:packId"
          render={() => <InnerNavBar pack={pack} />}
        />
        {/* {<InnerNavBar />} */}
        <div>
          <Switch>

            <Route
              path="/packs/:packId/schedules/:scheduleId"
              render={(props) => <ScheduleContainer props={props} pack={pack} members={members} />}
            />
            <Route
              path="/packs/:packId/schedules/new"
              render={(props) => <ScheduleFormCreateContainer props={props} pack={pack} />}
            />
            <Route
              exact path="/packs/:packId/payments/details"
              render={() => <PaymentBreakdown pack={pack} payments={pack.payments} />}
            />
            <Route
              exact path="/packs/:packId/payments"
              render={() => <PaymentsIndexContainer pack={pack} payments={pack.payments} />}
            />
            <Route
              exact path="/packs/:packId/payments/new"
              render={() => <CreatePaymentFormContainer pack={pack} />}
            />
            <Route
              path="/packs/:packId/photos/all"
              render={(props) => <PhotoIndexContainer props={props} pack={pack} photos={pack.photos} />}
            />
            <Route
              path="/packs/:packId/photos/upload"
              render={(props) => <PhotoUploadContainer props={props} packId={pack.id} photos={pack.photos} />}
            /> 
          </Switch>
        </div>

      </div>
    )
  }
}


