import React from 'react';
import './payment_form.css';
import { IoT1ClickProjects } from 'aws-sdk';

class CreatePaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: "",
      category: "",
      spotterId: this.props.currentUser.id,
      chargeeIds: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
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

    this.setState({
      title: "",
      amount: "",
      category: "",
      spotterId: this.props.currentUser.id,
      chargeeIds: []}, () => {
        this.props.props.history.push(`/packs/${this.props.pack._id}/payments`)
      })
  }

  handleCheckbox(e) {
    e.preventDefault();
    
    const members = this.state.chargeeIds;

    if (e.target.checked) {
      members.push(e.target.value)
    } else {
      let index = members.indexOf(e.target.value)
      members.splice(index, 1);
    }

    this.setState({ chargeeIds: members })
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

          <select className="category-dropdown" onChange={this.handleInput("category")}>
            <option value="" selected disabled>- Select a Category -</option>
            <option value="Transportation">Transportation</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Food">Food</option>
            <option value="Drinks">Drinks</option>
            <option value="Activity">Activity</option>
            <option value="Other">Other</option>
          </select>

          <div className="payment-checkbox-container">
            <label className="payment-field-label">
              Choose Pack Members to split with:
            </label>
            <div className="payment-checkbox-item">
              {
                Object.values(this.props.members).map(member => {
                  return (
                    <div key={member._id}>
                      <input type="checkbox" className="pack-member-checkbox" onChange={this.handleCheckbox} value={member._id} />&nbsp;{member.firstName}&nbsp;{member.lastName}
                    </div>
                  )
                })
              }
            </div>
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