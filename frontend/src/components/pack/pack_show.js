import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScheduleContainer from '../schedule/schedule_container';
import ScheduleFormCreateContainer from '../schedule/schedule_form_create_container';
import PaymentsIndexContainer from '../payments/payments_index_container';
import CreatePaymentFormContainer from '../payments/create_payment_form_container';
import PhotoIndexContainer from '../photos/photo_index_container';
import PhotoUploadContainer from '../photos/photo_upload_container'; 
import PhotoShowContainer from '../photos/photo_show_container'; 
import PaymentBreakdown from '../payments/payment_breakdown';
import InnerNavBar from '../nav/inner_navbar';
import mountain1 from './mountain-1.jpg';
import mountain2 from './mountain-2.jpg';
import mountain3 from './mountain-3.jpg';
import mountain4 from './mountain-4.jpg';
import mountain5 from './mountain-5.jpg';
import { formatDate } from '../../util/date_util';

export default class PackShow extends React.Component {
  constructor(props) {
    super(props);

    this.background = this.choosePic();
  }

  componentDidMount() {
    this.props.getPack(this.props.match.params.packId).then( () => {
      if (this.props.pack && Object.values(this.props.pack).length) {
        this.props.getMembers({ members: this.props.pack.members.join(",")})
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.packId !== this.props.match.params.packId) {
      this.background = this.choosePic();
      this.props.getPack(this.props.match.params.packId).then( () => {
        if (this.props.pack && Object.values(this.props.pack).length) {
          this.props.getMembers({ members: this.props.pack.members.join(",")})
        }
      });
    }
  }

  calcCountdown() {
    let today = new Date()
    let time = new Date(this.props.pack.startDate) - today;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    return (days > 0) ? days : 0;
  }

  choosePic() {
    let pics = [mountain1, mountain2, mountain3, mountain4, mountain5];
    return pics[Math.floor(Math.random()*pics.length)]
  }

  showPack() {
    if (this.props.history.location && (this.props.history.location.pathname.split("/").length <= 3)) {
      return (
        <div>
          <div className="pack-title">
            {this.props.pack.name}
          </div>
          <div className="pack-countdown">
            <div className="cd-num">
              {this.calcCountdown()}
            </div>
            <div className="cd-words">
              <span>&nbsp;Days Left!</span>
            </div>
          </div>
          <div className="pack-show">
            <div className="pack-image">
              <img src={this.background} alt="background" />
            </div>
            <div className="pack-info">
              <div className="pack-info-about">
                <span><p>Pack Info</p></span>
                <ul>
                  <li>Start Date: {formatDate(this.props.pack.startDate)}</li>
                  <li>End Date: {formatDate(this.props.pack.endDate)}</li>
                  <li>Pack Size: {this.props.pack.members.length}</li>
                  <li>Schedules Set: {this.props.pack.schedules.length}</li>
                </ul>
              </div>
              <div className="pack-info-add">
                <span><p>Pack Code and Password</p></span>
                <ul>
                  <li>Pack Code: {this.props.pack._id}</li>
                  <li>Password: {this.props.pack.password}</li>
                </ul>
                <p className="how-to-add">Copy the Pack Code and Password to give to friends to join this pack!</p>
              </div>
              <div className="pack-info-members">
                <span><p>Pack Members</p></span>
                <ul>
                  {Object.values(this.props.members).forEach(member => {
                  return(<li>{member.firstName} {member.lastName}</li>)})}
                  {/* {Object.values(this.props.members).forEach(member => console.log(member.firstName))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    let { pack, schedule, members } = this.props;

    if (!pack || !Object.values(members).length) {
      return null;
    }

    // if (this.props.history.location && (this.props.history.location.pathname.split("/").length <= 3)) {
    //   redirect = (schedule.length) ? (
    //     this.props.history.push(`/packs/${pack._id}/schedules/${schedule[0]._id}`) 
    //   ) : (
    //     this.props.history.push(`/packs/${pack._id}/schedules/new`) 
    //   )
    // }

    

    return(
      <div>
        {this.showPack()}
        <Route
          path="/packs/:packId"
          render={() => <InnerNavBar pack={pack} />}
        />
        {/* {<InnerNavBar />} */}
        <div>
          <Switch>

            <Route
              path="/packs/:packId/schedules/new"
              render={(props) => <ScheduleFormCreateContainer props={props} pack={pack} members={members}/>}
            />
            <Route
              path="/packs/:packId/schedules/:scheduleId"
              render={(props) => <ScheduleContainer props={props} pack={pack} members={members} />}
            />
            <Route
              exact path="/packs/:packId/payments/details"
              render={() => <PaymentBreakdown pack={pack} payments={pack.payments} members={members}/>}
            />
            <Route
              exact path="/packs/:packId/payments"
              render={() => <PaymentsIndexContainer pack={pack} payments={pack.payments} members={members}/>}
            />
            <Route
              exact path="/packs/:packId/payments/new"
              render={() => <CreatePaymentFormContainer pack={pack} members={members}/>}
            />
            <Route
              path="/packs/:packId/photos/all"
              render={(props) => <PhotoIndexContainer props={props} pack={pack} photos={pack.photos} />}
            />
            <Route
              path="/packs/:packId/photos/upload"
              render={(props) => <PhotoUploadContainer props={props} packId={pack.id} photos={pack.photos} />}
            /> 
            <Route
              path="/packs/:packId/photos/:photoId"
              render={(props) => <PhotoShowContainer props={props} packId={pack.id} photos={pack.photos} />}
            /> 
          </Switch>
        </div>

      </div>
    )
  }
}


