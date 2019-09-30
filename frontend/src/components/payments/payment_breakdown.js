import React from 'react';
import { Link } from 'react-router-dom';

const PaymentBreakdown = ({ pack, payments }) => {
  return (
    <section className="payments-index">
      <div className="headers-container">
        <div className="main-headers-container">
          <div className="pack-name-header">
            {pack.name}
          </div>
          <Link to={`/packs/${pack._id}/payments/new`}>
            <button className="create-expense-button">
              <i class="fas fa-plus"></i> Add an Expense
              </button>
          </Link>
        </div>
        <div className="subheaders-container">
          <Link to={`/packs/${pack._id}/payments/`}>
            <div className="subheader" >
              Feed
            </div>
          </Link>
          <Link to={`/packs/${pack._id}/payments/details`}>
            <div className="subheader" >
              Trip Breakdown
            </div>
          </Link>
        </div>
      </div>
      <div className="payments-index-container">
        payments container
      </div>
    </section>
  )
};

export default PaymentBreakdown;