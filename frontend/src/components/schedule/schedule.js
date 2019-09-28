import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSchedule } from '../../actions/schedule_actions';
import { deleteEvent } from '../../actions/event_actions';
import ScheduleIndexItem from './schedule_index_item';
import Event from '../event/event';

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

    }

    handleDeleteSchedule(id) {
        deleteSchedule(id)
    }

    handleDeleteEvent(id) {
        deleteEvent(id)
    }

    getCurrentSchedule() {
        let currentSchedule;
        for (let i = 0; i < this.props.schedules.length; i++) {
            if (this.props.schedules[i].id === this.props.scheduleId) {
                return currentSchedule = this.props.schedule[i]
            }
        }
    }

    render() {
        let currentSchedule = this.getCurrentSchedule();
        let events = currentSchedule.events;
        
        return(
            <div className="schedule-and-event">
                <div className="schedule-index-pane-35">
                    <div>
                        <ul>
                            <li className="schedule-item">
                                {Object.values(this.props.schedules).map(schedule => (
                                    <ScheduleIndexItem
                                    key={schedule.id}
                                    packId={this.props.packId}
                                    schedule={schedule}
                                    events={schedule.events}
                                    handleDelete={this.handleDeleteSchedule}
                                    />
                                ))}
                            </li>
                        </ul>
                    </div>                   
                </div>

                <div className="event-pane-65">
                    <div className="event-container">
                        {Object.values(events).map(event => (
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