import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    // debugger
    return (
      <div className="schedule-item-div">
        <Link to={`/packs/${this.props.packId}/schedules/${this.props.schedule._id}`} className="schedule-detail">
          <div className="schedule-item-el">
            <div className="schedule-title">{this.props.schedule.title}</div>
            {/* <div className="schedule-members">{this.props.members}hello bruv</div> */}
            <div className="schedule-date">{formatDate(this.props.schedule.startDate)} - {formatDate(this.props.schedule.endDate)}</div>
          </div>
        </Link>
        <div className="schedule-change-buttons">
          <button className="change-button" onClick={() => this.props.handleEditSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
            <i className="far fa-edit"></i>
          </button>
          <button className="change-button" onClick={() => this.props.handleDeleteSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ScheduleIndexItem;