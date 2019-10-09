import React from 'react';
import { throws } from 'assert';

class ScheduleForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      startDate: '',
      endDate: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    let schedule = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    this.props.createSchedule(schedule);
  }

  render() {
    return (
      <div className="schedule-form-container">
        <h1>HELLO, LETS MAKE A NEW SCHEDULE</h1>
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
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ScheduleForm;