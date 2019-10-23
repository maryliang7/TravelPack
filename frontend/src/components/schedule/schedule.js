import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ScheduleIndexItem from './schedule_index_item';
import Event from '../event/event';
import './schedule.css'
import WolfCrop from '../pack/wolf-back-crop.png';


//packs/:packId/schedules/:scheduleId
class Schedule extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pack: {},
      schedules: [],
      events: {},
      packId: '',
      scheduleId: '',
      addSchedule: false,
      addEvent: false,
      title: '',
      startDate: '',
      endDate: '',
      eventTitle: '',
      eventDescription: '',
      eventAddress: '',
      eventCost: '0',
    }
    this.handleDeleteSchedule = this.handleDeleteSchedule.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleUpdateSchedule = this.handleUpdateSchedule.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleDeleteSchedule(data) {
    this.props.deleteSchedule(data)
  }

  handleUpdateSchedule(data) {
    this.props.updateSchedule(data)
  }
  
  handleDeleteEvent(data) {
    this.props.deleteEvent(data)
  }

  handleUpdateEvent(data) {
    this.props.updateEvent(data)
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let schedule = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      packId: this.props.pack._id
    };
    
    if (this.props.createSchedule(schedule)) {
      this.setState({addSchedule: false})
    }
  }

  handleEventSubmit(e) {
    e.preventDefault();
    let event = {
      title: this.state.eventTitle,
      description: this.state.eventDescription,
      address: this.state.eventAddress,
      cost: parseInt(this.state.eventCost),
      packId: this.props.pack._id,
      scheduleId: this.props.props.match.params.scheduleId
    };
    
    if (this.props.createEvent(event)) {
      this.setState({addEvent: false})
    }
  }
  
  displayAddScheduleButton() {
    return(
      <div className="new-schedule-button">
        <button className="new-schedule-link" onClick={() => this.setState({addSchedule: true})}>
          <i className="far fa-calendar-plus">&nbsp;&nbsp;</i>
          </button>
      </div>
    )
  }

  displayAddEventButton() {
    return(
      <div className="new-schedule-button">
        <button className="new-event-link" onClick={() => this.setState({addEvent: true})}>
          <i className="far fa-calendar-plus">&nbsp;&nbsp;</i>
          </button>
      </div>
    )
  }

  displayNewScheduleForm() {
    return(
      <div className="schedule-form-container">
        <form className="schedule-form" onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <div className="schedule-title-input">
              <input type="text" className="title-input" placeholder="Schedule Title"
                onChange={this.update('title')}/>
            </div>
            <div className="schedule-date-input">
              Start Date: &nbsp;<input type="date" className="start-date"
                onChange={this.update('startDate')}/>
            </div>
            <div className="schedule-date-input">
              End &nbsp;Date: &nbsp;<input type="date" className="end-date"
                onChange={this.update('endDate')}/>
            </div>
          </div>

          <div className="schedule-change-buttons">
            <button type="submit" className="change-button" onClick={this.handleSubmit}>
              <i className="fas fa-check"></i>
            </button>
            <button className="change-button" onClick={() => this.setState({addSchedule: false})}>
              <i className="fas fa-times"></i>
            </button>
          </div>
      </form>
    </div>
    )
  }

  displayNewEventForm() {
    return(
      <div className="event-form-container"> 
        <form className="event-form-new" onSubmit={this.handleEventSubmit}>
          <div className="event-form-div">
            <div className="event-form-details">
              <div className="event-title-input">
                <input type="text" className="title-input" placeholder="Title"
                  onChange={this.update('eventTitle')}/>
              </div>
              <div className="event-description-input">
                Description: &nbsp;<input type="input" className="description-input" placeholder="Description"
                  onChange={this.update('eventDescription')}/>
              </div>
              <div className="event-address-input">
                Address: &nbsp;<input type="input" className="address-input" placeholder="Address"
                  onChange={this.update('eventAddress')}/>
              </div>
              <div className="event-cost-input">
                Cost: &nbsp;<input type="input" className="cost-input" placeholder="0"
                  onChange={this.update('eventCost')}/>
              </div>
            </div>

            <div className="event-change-buttons">
              <button type="submit" className="change-button" onClick={this.handleEventSubmit}>
                <i className="fas fa-check"></i>
              </button>
              <button className="change-button" onClick={() => this.setState({addEvent: false})}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
      </form>
    </div>
    )
  }

  // componentDidMount() {
  //   this.props.getSchedules(this.props.pack._id)
  // }

  // componentDidUpdate() {
  //   this.props.getSchedules(this.props.pack._id)
  // }

  render() {

    if (Object.values(this.props.schedules).length === 0) {
      return(
        <Redirect to={`/packs/${this.props.pack._id}/schedules/new`}/>
        // this.displayNewScheduleForm()
      );
    } 

    let currentSchedule = this.props.schedules[this.props.props.match.params.scheduleId];
    if (!currentSchedule) { //if there is no current schedule, display the new schedule form
      return (
        // <Redirect to="/new" />
        this.displayNewScheduleForm()
        // this.state.addSchedule === true ? this.displayNewScheduleForm() : this.displayAddScheduleButton()
      );
    }

    return(
      <div className="schedule-and-event">
          <div className="schedule-pane-35"> &nbsp;Schedules
            <ul>
              {Object.values(this.props.schedules).map(schedule => (
                <li className="schedule-event-item schedule" key={schedule._id}>
                  <ScheduleIndexItem
                  key={schedule._id}
                  packId={this.props.pack._id}
                  schedule={schedule}
                  events={schedule.events}
                  deleteSchedule={this.handleDeleteSchedule}
                  updateSchedule={this.handleUpdateSchedule}
                  />
                </li>
              ))}
            </ul>                 
            {this.state.addSchedule === true ? this.displayNewScheduleForm() : this.displayAddScheduleButton()}                          
          </div>
        <div className="event-pane-65"> &nbsp;&nbsp;&nbsp;&nbsp;Events
          <div className="event-container">
            <ul className="event-item">
              {Object.values(currentSchedule.events).map(event => (
                <li className="schedule-event-item event" key={event._id}>
                  <Event
                  key={event.id}
                  event={event}
                  deleteEvent={this.handleDeleteEvent}
                  updateEvent={this.handleUpdateEvent}
                  packId={this.props.pack._id}
                  scheduleId={currentSchedule._id}
                  />
                </li>
              ))}
            </ul>
            {this.state.addEvent === true ? this.displayNewEventForm() : this.displayAddEventButton()}                          
          </div>
        </div>
        <img id="wolf-crop" src={WolfCrop} />
      </div>
    )
  }
}

export default Schedule;