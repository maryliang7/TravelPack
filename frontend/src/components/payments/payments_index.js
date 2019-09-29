import React from 'react';
import { Link } from 'react-router-dom';
import './payments_index.css';
// Switch route needs to pass pack={pack} and payments={pack.payments}

class PaymentsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.deletePayment = this.props.deletePayment.bind(this);
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
                Add an Expense
              </button>
            </Link>
          </div>
          <div className="subheaders-container">
            <div className="subheader">
              Expenses
            </div>
            <div className="subheader">
              Breakdown 
            </div>
          </div>
        </div>
        <div className="payments-index-container">
          {
            this.props.payments.map((payment) => {
              for (let i = 0; i < payment.chargeeIds.length; i++) {
                debugger
                return (
                  <ul className="payments-index-item">
                    <li className="payment-title">
                      {payment.title}
                    </li>
                    <li className="payment-amount">
                      You paid
                      <br></br>
                      ${payment.amount}
                    </li>
                    <li className="charged-amount">
                      {/* {payment.chargeeIds[i]} owes you ${payment.amount / payment.chargeeIds.length} */}
                      Mary owes you 
                      <br></br>
                      ${payment.amount / payment.chargeeIds.length}
                    </li>
                    <button onClick={() => this.deletePayment(this.props.pack._id, payment._id)}>
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </ul>
                )
              }
            })
          }
        </div>
      </section>
    )
  }
}

export default PaymentsIndex;