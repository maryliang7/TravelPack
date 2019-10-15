import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="schedule-date">{this.props.schedule.startDate} - {this.props.schedule.endDate}</div>
          </div>
        </Link>
        <div className="schedule-change-buttons">
          <button className="change-button" onClick={() => this.props.handleEditSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
            <i class="far fa-edit"></i>
          </button>
          <button className="change-button" onClick={() => this.props.handleDeleteSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ScheduleIndexItem;