import React from 'react';
import { Discovery } from 'aws-sdk';

export default class Event extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="event-item-div">
        <div className="event-details">
          <div className="event-detail title">Event:&nbsp;&nbsp;{this.props.event.title}</div>
          <div className="event-detail description">Description:&nbsp;&nbsp;{this.props.event.description}</div>
          <div className="event-detail address">Location:&nbsp;&nbsp;{this.props.event.address}</div>
          <div className="event-detail cost">Cost:&nbsp;&nbsp;${this.props.event.cost}</div>
        </div>

        <div className="schedule-change-buttons">
          <button className="change-button" onClick={() => this.handleScheduleEditShow()}>
            <i className="far fa-edit"></i>
          </button>

          <button className="change-button" onClick={() => this.props.deleteEvent({packId: this.props.packId, scheduleId: this.props.scheduleId, eventId: this.props.event._id})}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}