import React from 'react';
import './payment_form.css';

class CreatePaymentForm extends React.Component {
  render() {
    return (
      <section className="payments-index">
        <div className="headers-container">
          <div className="main-headers-container">
            <div className="pack-name-header">
              {this.props.pack.name}
            </div>
          </div>
        </div>
        <div className="payment-form-header">
          Create a New Expense
        </div>
        <form className="payment-form-container">
          {/* <label className="payment-field-label">
            Title
          </label> */}
          <input
            className="payment-input"
            type="text"
            placeholder="Title"
            // value={this.state.username}
            // onChange={this.handleInput('full_name')}
          />
          {/* <label className="payment-field-label">
            Amount
          </label> */}
          <input
            className="payment-input"
            type="text"
            placeholder="Amount"
            // value={this.state.username}
            // onChange={this.handleInput('full_name')}
          />
          {/* <label className="payment-field-label">
            Category
          </label> */}
          <select className="category-dropdown">
            <option value="" selected disabled>- Select a Category -</option>
            <option value="">Transportation</option>
            <option value="">Accommodation</option>
            <option value="">Food</option>
            <option value="">Drinks</option>
            <option value="">Activity</option>
            <option value="">Other</option>
            {/* className="payment-input"
            type="text"
            // value={this.state.username}
            // onChange={this.handleInput('full_name')} */}
          </select>
          <div className="payment-checkbox-container">
            <label className="payment-field-label">
              Choose Pack Members to split with:
            </label>
            <div className="payment-checkbox-item">
              <input type="checkbox" className="pack-member-checkbox" name="" value="" />Pack Member
            </div>
            <div className="payment-checkbox-item">
              <input type="checkbox" className="pack-member-checkbox" name="" value="" />Pack Member
            </div>
            <div className="payment-checkbox-item">
              <input type="checkbox" className="pack-member-checkbox" name="" value="" />Pack Member
            </div>
          </div>
          <button className="create-expense-button" onClick={this.handleSubmit}>
            <a href="">Create Expense</a>
          </button>
        </form>
      </section>
    )
  }
}

export default CreatePaymentForm;