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
            scheduleId: ''
        }
        this.handleDeleteSchedule = this.handleDeleteSchedule.bind(this);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
        // this.getCurrentSchedule = this.getCurrentSchedule.bind(this);
    }

    componentDidMount() {
        this.props.getSchedules(this.props.props.match.params.packId)
    }

    handleDeleteSchedule(id) {
        deleteSchedule(id)
    }

    handleDeleteEvent(id) {
        deleteEvent(id)
    }

    getCurrentSchedule(scheduleId) {
        let allSchedules = Object.values(this.props.pack.schedules);
        for (let i = 0; i < allSchedules.length; i++) {
            if (allSchedules[i]._id === scheduleId) {
                return allSchedules[i]
            }
        }
    }

    render() {
        let currentSchedule = this.getCurrentSchedule(this.props.props.match.params.scheduleId);
        return(
            <div className="schedule-and-event">
                <div className="schedule-pane-35">
                    <div>
                        <ul>
                                {Object.values(this.props.pack.schedules).map(schedule => (
                            <li className="schedule-item">
                                    <ScheduleIndexItem
                                    key={schedule.id}
                                    packId={this.props.pack._id}
                                    schedule={schedule}
                                    members={this.props.members}
                                    events={schedule.events}
                                    handleDelete={this.handleDeleteSchedule}
                                    />
                            </li>
                                ))}
                        </ul>
                    </div>                   
                </div>

                <div className="event-pane-65">
                    <div className="event-container">
                        {Object.values(currentSchedule.events).map(event => (
                            <Event
                            key={event.id}
                            event={event}
                            handleDelete={this.handleDeleteEvent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Schedule;