import React from 'react';
import { Link } from 'react-router-dom';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Link
        to={`/packs/${this.props.packId}/schedules/${this.props.schedule._id}`} className="schedule-detail">
        <div className="schedule-title">{this.props.schedule.title}</div>
        <div className="schedule-members">{this.props.members}hello bruv</div>
        <div className="schedule-date">{this.props.schedule.startDate} - {this.props.schedule.endDate}</div>
      </Link>
    );
  }
}

export default ScheduleIndexItem;