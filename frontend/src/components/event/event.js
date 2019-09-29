import React from 'react';
import { Discovery } from 'aws-sdk';

export default class Event extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className="event">
        <div className="event-details">
          <div className="event-detail title">{this.props.event.title}</div>
          <div className="event-detail description">{this.props.event.description}</div>
          <div className="event-detail address">{this.props.event.address}</div>
          <div className="event-detail cost">${this.props.event.cost}</div>
        </div>
      </div>
    );
  }
}