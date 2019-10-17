import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSchedule } from '../../actions/schedule_actions';
import { deleteEvent } from '../../actions/event_actions';
import ScheduleIndexItem from './schedule_index_item';
import Event from '../event/event';
import './schedule.css'

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
      title: '',
      startDate: '',
      endDate: ''
    }
    this.handleDeleteSchedule = this.handleDeleteSchedule.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);

    this.handleUpdateSchedule = this.handleUpdateSchedule.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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

    displayAddScheduleButton() {
      return(
        <div className="new-schedule-button">
          <button className="new-schedule-link" onClick={() => this.setState({addSchedule: true})}>
            <i className="far fa-calendar-plus">&nbsp;&nbsp;</i>
            </button>
        </div>
      )
    }

    displayNewScheduleForm() {
      return(
        <div className="schedule-form-container">
          <form className="schedule-form" onSubmit={this.handleSubmit}>
            <div>
              <div className="schedule-title-input">
                <input type="text" className="title-input" placeholder="Schedule Title"
                  onChange={this.update('title')}/>
              </div>
              <div className="schedule-start-date-input">
                Start Date: &nbsp;<input type="date" className="start-date"
                  onChange={this.update('startDate')}/>
              </div>
              <div className="schedule-end-date-input">
                End &nbsp;Date: &nbsp;<input type="date" className="end-date"
                  onChange={this.update('endDate')}/>
              </div>
            </div>
          <div>
            <div className="schedule-change-buttons">
              <button type="submit" className="change-button" onClick={this.handleSubmit}>
                <i className="fas fa-check"></i>
              </button>
              <button className="change-button" onClick={() => this.setState({addSchedule: false})}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      )
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
        console.log("saved success")
        this.setState({addSchedule: false})
      }
    }

    render() {
      let currentSchedule = this.props.schedules[this.props.props.match.params.scheduleId];
      // debugger
      if (!currentSchedule) {
        return (
          <div>
            {this.state.addSchedule === true ? this.displayNewScheduleForm() : this.displayAddScheduleButton()}
          </div>
        );
      }
      // debugger
    return(
      <div className="schedule-and-event">
          <div className="schedule-pane-35"> &nbsp;Schedules
            <div>
              <ul>
                {Object.values(this.props.schedules).map(schedule => (
                  <li className="schedule-event-item" key={schedule._id}>
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
                {this.state.addSchedule === true ? this.displayNewScheduleForm() : this.displayAddScheduleButton()}                          
              </ul>
            </div>                   
          </div>
        <div className="event-pane-65"> &nbsp;&nbsp;&nbsp;&nbsp;Events
          <div className="event-container">
            <ul className="event-item">
              {Object.values(currentSchedule.events).map(event => (
                <li key={event._id}>
                  <Event
                  key={event.id}
                  event={event}
                  handleDelete={this.handleDeleteEvent}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Schedule;