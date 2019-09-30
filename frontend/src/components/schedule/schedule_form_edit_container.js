import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleForm from './schedule_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.schedule,
    formType: 'edit'
})