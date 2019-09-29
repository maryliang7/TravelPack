import React from 'react';
import { Discovery } from 'aws-sdk';

export default class Event extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className="event">
        <div>{this.props.event.title}</div>
        <div>{this.props.event.description}</div>
        <div>{this.props.event.address}</div>
        <div>{this.props.event.cost}</div>
      </div>
    );
  }
}