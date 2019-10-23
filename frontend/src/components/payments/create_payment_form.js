import React from 'react';
import './payment_form.css';
import { IoT1ClickProjects } from 'aws-sdk';
import WolfCrop from '../pack/wolf-back-crop.png';

class CreatePaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: "",
      category: "Other",
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
      category: "Other",
      spotterId: this.props.currentUser.id,
      chargeeIds: []}, () => {
        this.props.props.history.push(`/packs/${this.props.pack._id}/payments`)
      })
  }

  handleCheckbox(e) {
    
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
        <form className="payment-form-container" onSubmit={this.handleSubmit}>
          <div className="payment-form-header">
            Create a New Expense
          </div>

          <input
            className="payment-input"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInput('title')}
          />
          <input
            className="payment-input"
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleInput('amount')}
          />

          <select className="category-dropdown" onChange={this.handleInput("category")}>
            <option value="Other">Other</option>
            <option value="Transportation">Transportation</option>
            <option value="Food/Drinks">Food/Drinks</option>
            <option value="Shopping">Shopping</option>
            <option value="Activity">Activity</option>
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
            <a href="">Create</a>
          </button>
        </form>
        <div>
          <img id="wolf-crop" src={WolfCrop} />
        </div>
      </section>
    )
  }
}

export default CreatePaymentForm;