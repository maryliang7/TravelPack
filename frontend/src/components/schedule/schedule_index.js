import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSchedule } from '../../actions/schedule_actions'

class Schedule extends React.Component{
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getPack(this.props.packId);
    }

    handleDelete(id) {
        deleteSchedule(id)
    }

    render() {
        return(
            <div className="schedule-table">
                <table className="table">
                    <thead>
                        <tr className="schedules-header">
                            <th className="title"></th>
                            <th className="dates"></th>
                            <th className="events"></th>
                        </tr>
                    </thead>

                    
                </table>
            </div>
        )
    }
}

export default Schedule;