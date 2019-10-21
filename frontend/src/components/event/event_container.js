import React from 'react';
import { connect } from 'react-redux';
import Event from './event';
import getEvent from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.entities.events
})

const mapDispatchToProps = dispatch => ({
  updateEvent: (data) => dispatch(updateEvent(data)),
  deleteEvent: (data) => dispatch(deleteEvent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)