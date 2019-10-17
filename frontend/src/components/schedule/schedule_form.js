import React from 'react';
import { throws } from 'assert';
import {withRouter} from 'react-router-dom';

class ScheduleForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      startDate: '',
      endDate: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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
      // debugger;
      this.props.history.push(`/packs/${this.props.pack._id}`)
      // this.props.history.push(`/packs/${this.props.pack._id}/schedules/${schedule._id}`)
    }

  }

  render() {
    return (
      <div className="schedule-form-container-new">
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
            <button type="submit" className="new-schedule-submit">
                <i className="fas fa-check"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(ScheduleForm);