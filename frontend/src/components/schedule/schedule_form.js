import React from 'react';
import { throws } from 'assert';
import {withRouter, Redirect} from 'react-router-dom';

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

    this.props.createSchedule(schedule)

    // if (this.props.createSchedule(schedule)) {
      // return(
      //   <Redirect to={}
      // )
      // this.props.history.push(`/packs/${this.props.pack._id}`)
      // this.props.history.push(`/packs/${this.props.pack._id}/schedules/${schedule._id}`)
    // }
  }

  render() {
    if (Object.values(this.props.schedules).length !== 0) {
      return(
        <Redirect to={`/packs/${this.props.pack._id}/schedules/${Object.keys(this.props.schedules)[0]}`}/>
      )
    }

    return (
      <div className="schedule-form-container-new">
        <form className="schedule-form" onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <div className="title-input">
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
}

export default withRouter(ScheduleForm);