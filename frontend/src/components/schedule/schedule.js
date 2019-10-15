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
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDeleteSchedule(data) {
      this.props.deleteSchedule(data)
    }

    handleDeleteEvent(id) {
      this.props.deleteEvent(id)
    }

    displayAddScheduleButton() {
      return(
        <div className="new-schedule-button">
          {/* <Link className="new-schedule-link" to={`/packs/${this.props.pack._id}/schedules/new`}> */}
          <button className="new-schedule-link" onClick={() => this.setState({addSchedule: true})}>
            <i className="far fa-calendar-plus">&nbsp;&nbsp;</i>
            </button>
          {/* </Link> */}
        </div>
      )
    }

    displayNewScheduleForm() {
      return(
        <div className="schedule-form-container">
        <h1></h1>
        <div>
          <form className="schedule-form" onSubmit={this.handleSubmit}>
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
            <div>
              <input type="submit" value="Create Schedule" className="new-schedule-submit"/>
              <button onClick={() => this.setState({addSchedule: false})}>Cancel</button>
            </div>
          </form>
        </div>
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
        // debugger;
        // this.props.history.push(`/packs/${this.props.pack._id}`)
        // this.props.history.push(`/packs/${this.props.pack._id}/schedules/${schedule._id}`)
      }
  
    }

    render() {
        let currentSchedule = this.props.schedules[this.props.props.match.params.scheduleId];
        if (!currentSchedule) {
            return null;
        }
        // debugger
        return(
            <div className="schedule-and-event">
                <div className="schedule-pane-35"> &nbsp;Schedules
                    <div>
                      <div>
                        {/* <i class="fas fa-calendar-plus"></i> */}
                      </div>
                        <ul>
                            {Object.values(this.props.schedules).map(schedule => (
                              <li className="schedule-item" key={schedule._id}>
                                  <ScheduleIndexItem
                                  packId={this.props.pack._id}
                                  schedule={schedule}
                                  key={schedule._id}
                                  members={this.props.members}
                                  events={schedule.events}
                                  handleDeleteSchedule={this.handleDeleteSchedule}
                                  />
                              </li>
                            ))}
                            {this.state.addSchedule === true ? this.displayNewScheduleForm() : this.displayAddScheduleButton()}
                            {/* <div className="new-schedule-button">
                              <Link className="new-schedule-link" to={`/packs/${this.props.pack._id}/schedules/new`}>
                                <i className="far fa-calendar-plus">&nbsp;&nbsp;</i>
                                <div>Add a Schedule</div> 
                              </Link>
                          </div> */}
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