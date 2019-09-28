import React from 'react';
import { Link } from 'react-router-dom';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
     <div>
       <Link to={`/packs/${this.props.packId}/schedules/${this.props.scheduleId}`}>
       </Link>
     </div> 
    )
  }
}

export default ScheduleIndexItem;