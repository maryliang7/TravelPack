import React from 'react';

export default class Event extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayEdit: false,
      eventTitle: this.props.event.title,
      eventDescription: this.props.event.description,
      eventAddress: this.props.event.address,
      eventCost: this.props.event.cost
    }

    this.updateEvent = this.updateEvent.bind(this);
  }
 
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateEvent(data) {
    let event = {
      title: this.state.eventTitle,
      description: this.state.eventDescription,
      address: this.state.eventAddress,
      cost: this.state.eventCost,
      packId: data.packId,
      scheduleId: data.scheduleId,
      eventId: data.eventId
    }

    this.props.updateEvent(event)
  }

  displayEvent() {
    return(
      <div className="event-item-div">
        <div className="event-details">
          <div className="event-detail title">Event:&nbsp;&nbsp;{this.props.event.title}</div>
          <div className="event-detail description">Description:&nbsp;&nbsp;{this.props.event.description}</div>
          <div className="event-detail address">Location:&nbsp;&nbsp;{this.props.event.address}</div>
          <div className="event-detail cost">Cost:&nbsp;&nbsp;${this.props.event.cost}</div>
        </div>

        <div className="schedule-change-buttons">
          <button className="change-button" onClick={() => this.setState({displayEdit: true})}>
            <i className="far fa-edit"></i>
          </button>

          <button className="change-button" onClick={() => this.props.deleteEvent({packId: this.props.packId, scheduleId: this.props.scheduleId, eventId: this.props.event._id})}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    )
  }

  displayEdit() {
    return(
      <div className="event-form-container"> 
        <form className="event-form" onSubmit={this.updateEvent}>
          <div className="event-form-div">
            <div className="event-form-details">
              <div className="event-title-input">
                <input type="text" className="title-input" value={this.state.eventTitle}
                  onChange={this.update('eventTitle')}/>
              </div>
              <div className="event-description-input">
                Description: &nbsp;<input type="input" className="description-input" value={this.state.eventDescription}
                  onChange={this.update('eventDescription')}/>
              </div>
              <div className="event-address-input">
                Address: &nbsp;<input type="input" className="address-input" value={this.state.eventAddress}
                  onChange={this.update('eventAddress')}/>
              </div>
              <div className="event-cost-input">
                Cost: &nbsp;<input type="input" className="cost-input" value={this.state.eventCost}
                  onChange={this.update('eventCost')}/>
              </div>
            </div>

            <div className="event-change-buttons">
              <button type="submit" className="change-button" onClick={() => this.updateEvent({packId: this.props.packId, scheduleId: this.props.scheduleId, eventId: this.props.event._id})}>
                <i className="fas fa-check"></i>
              </button>
              <button className="change-button" onClick={() => this.setState({displayEdit: false})}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
      </form>
    </div>
    )
  }

  render(){
    return (
      this.state.displayEdit === false ? this.displayEvent() : this.displayEdit()
    );
  }
}