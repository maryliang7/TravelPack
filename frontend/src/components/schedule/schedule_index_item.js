import React from 'react';
import { Link } from 'react-router-dom';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Link
        to={`/packs/${this.props.packId}/schedules/${this.props.schedule._id}`} className="schedule-title">
        <div>{this.props.schedule.title}</div>
        <div>{this.props.schedule.startDate} - {this.props.schedule.endDate}</div>

      </Link>
    );
  }
}

export default ScheduleIndexItem;