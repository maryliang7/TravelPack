import React from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import './payments_index.css';


export default class PaymentBreakdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      labels: ['Transportation', 'Food/Drinks', 'Shopping', 'Activity', 'Other'],
      datasets: [{
        data: this.pullData(),
        backgroundColor: ['rgb(238, 181, 151)', 'rgb(78, 103, 161)', 'rgb(105, 117, 172)', 'lightgray', 'rgb(37, 60, 112)']
      }]
    }
    debugger
  }

  pullData() {
    let transportation = 0;
    let food = 0;
    let shopping = 0;
    let activity = 0;
    let other = 0;

    this.props.payments.forEach(payment => {
      switch (payment.category) {
        case 'Transportation':
          transportation += payment.amount
          break;
        case 'Food/Drinks':
          food += payment.amount
          break;
        case 'Shopping':
          shopping += payment.amount
          break;
        case 'Activity':
          activity += payment.amount
          break;
        case 'Other':
          other += payment.amount
          break;
      }
    })

    return [transportation, food, shopping, activity, other]
  }


  render() {
    return (
      <section className="payments-index">
        <div className="headers-container">
          <div className="main-headers-container">
            <div className="pack-name-header">
              {this.props.pack.name}
            </div>
            <Link to={`/packs/${this.props.pack._id}/payments/new`}>
              <button className="create-expense-button">
                <i className="fas fa-plus"></i> Add an Expense
                </button>
            </Link>
          </div>
          <div className="subheaders-container">
            <Link to={`/packs/${this.props.pack._id}/payments/`}>
              <div className="subheader" >
                Feed
              </div>
            </Link>
            <Link to={`/packs/${this.props.pack._id}/payments/details`}>
              <div className="subheader" >
                Trip Breakdown
              </div>
            </Link>
          </div>
        </div>
        <div className="payments-index-container">
          <div className="pie-chart">
            <Pie data={{
              labels: this.state.labels,
              datasets: this.state.datasets
            }}
            height={100}
            />
          </div>
        </div>
      </section>
    )
  }
};
