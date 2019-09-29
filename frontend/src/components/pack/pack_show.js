import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScheduleContainer from '../schedule/schedule_container';
import ScheduleFormCreateContainer from '../schedule/schedule_form_create_container';
import './pack_show.css';

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
        <div className="pack-show">
          hello
        </div>
        <div>
          <Switch>
            <Route
              path="/packs/:packId/schedules/:scheduleId"
              render={(props) => <ScheduleContainer props={props} packId={pack.id} schedules={pack.schedules} />}
            />
            {/* <Route
              path="/packs/:packId/schedules/new"
              render={(props) => <ScheduleFormCreateContainer props={props} packId={pack.id} schedules={pack.schedules} />}
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