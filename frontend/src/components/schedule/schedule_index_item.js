import React from 'react';
import { Link } from 'react-router-dom';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
     <div>
       <Link to={`/packs/${this.props.packId}/schedules/${this.props.schedule._id}`}>
         <div className="schedule-title">
            {this.props.schedule.title}
         </div>
       </Link>
     </div> 
    )
  }
}

export default ScheduleIndexItem;