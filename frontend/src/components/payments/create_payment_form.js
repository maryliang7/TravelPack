import React from 'react';
import './payment_form.css';

class CreatePaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: "",
      category: "",
      spotterId: "5d8e73c9ceac02d17c6e6177",
      chargeeIds: "5d8a7614ddeaf768f357bc0e",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const payment = Object.assign({}, this.state);
    this.props.createPayment(this.props.pack._id, payment);
  }

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
        <form className="payment-form-container" onSubmit={this.handleSubmit}>
          <input
            className="payment-input"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInput('title')}
          />
          <input
            className="payment-input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleInput('amount')}
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
              {
                this.props.pack.members.map(member => {
                  return (
                    <div>
                      <input type="checkbox" className="pack-member-checkbox" name="" value={`${member}`} />{member}
                    </div>
                  )
                })
              }
            </div>
            {/* <div className="payment-checkbox-item">
              <input type="checkbox" className="pack-member-checkbox" name="" value="" />Pack Member
            </div>
            <div className="payment-checkbox-item">
              <input type="checkbox" className="pack-member-checkbox" name="" value="" />Pack Member
            </div> */}
          </div>
          <button className="create-payment-button" onClick={this.handleSubmit}>
            <a href="">Create Expense</a>
          </button>
        </form>
      </section>
    )
  }
}

export default CreatePaymentForm;