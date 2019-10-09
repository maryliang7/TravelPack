import React from 'react';

class ScheduleForm extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div className="schedule-form-container">
        <div>
          <form className="schedule-form">
            <div className="schedule-title-input">
              <input type="text" className="title-input"/>
            </div>
            <div className="schedule-start-date-input">
              <input type="date" className="start-date"/>
            </div>
            <div className="schedule-end-date-input">
              <input type="date" className="end-date"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}