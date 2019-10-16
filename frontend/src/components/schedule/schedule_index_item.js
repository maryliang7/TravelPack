import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      title: this.props.schedule.title,
      startDate: this.props.schedule.startDate,
      endDate: this.props.schedule.endDate,
      showSchedule: true
    }

    this.displayEdit = this.displayEdit.bind(this);
    this.displaySchedule = this.displaySchedule.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleEditSchedule() {
    this.setState({showSchedule: false})
  }

  displayEdit() {
    return(
      // <div className="schedule-form-container">
        <div>
          <form className="schedule-form" onSubmit={this.handleSubmit}>
            <div className="schedule-title-input">
              <input type="text" className="title-input" placeholder="Schedule Title" value={this.state.title}
                onChange={this.update('title')}/>
            </div>

            <div className="schedule-start-date-input">
              Start Date: &nbsp;<input type="date" className="start-date" value={this.state.startDate}
                onChange={this.update('startDate')}/>
            </div>

            <div className="schedule-end-date-input">
              End &nbsp;Date: &nbsp;<input type="date" className="end-date" value={this.state.endDate}
                onChange={this.update('endDate')}/>
            </div>

            <div>
              <input type="submit" value="Update Schedule" className="new-schedule-submit"/>
              <button onClick={() => this.setState({showSchedule: true})}>Cancel</button>
            </div>
          </form>
        {/* </div> */}
      </div>
    )
  }

  displaySchedule() {
    return(
      <div className="schedule-item-div">
        <Link to={`/packs/${this.props.packId}/schedules/${this.props.schedule._id}`} className="schedule-detail">
          <div className="schedule-item-el">
            <div className="schedule-title">{this.props.schedule.title}</div>
            <div className="schedule-date">{formatDate(this.props.schedule.startDate)} - {formatDate(this.props.schedule.endDate)}</div>
          </div>
        </Link>

        <div className="schedule-change-buttons">
          <button className="change-button" onClick={() => this.handleEditSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
            <i className="far fa-edit"></i>
          </button>

          <button className="change-button" onClick={() => this.props.handleDeleteSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="schedule-show-or-edit">
        {this.state.showSchedule === true ? this.displaySchedule() : this.displayEdit()}
      </div>
      // <div className="schedule-item-div">
      //   <Link to={`/packs/${this.props.packId}/schedules/${this.props.schedule._id}`} className="schedule-detail">
      //     <div className="schedule-item-el">
      //       <div className="schedule-title">{this.props.schedule.title}</div>
      //       <div className="schedule-date">{formatDate(this.props.schedule.startDate)} - {formatDate(this.props.schedule.endDate)}</div>
      //     </div>
      //   </Link>
      //   <div className="schedule-change-buttons">
      //     <button className="change-button" onClick={() => this.props.handleEditSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
      //       <i className="far fa-edit"></i>
      //     </button>
      //     <button className="change-button" onClick={() => this.props.handleDeleteSchedule({packId: this.props.packId, scheduleId: this.props.schedule._id})}>
      //       <i className="fas fa-trash-alt"></i>
      //     </button>
      //   </div>
      // </div>
    );
  }
}

export default ScheduleIndexItem;