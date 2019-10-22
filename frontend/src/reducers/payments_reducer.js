import { RECEIVE_PAYMENT, REMOVE_PAYMENT } from '../actions/payment_actions';
import { RECEIVE_PACK } from '../actions/pack_actions';

const PaymentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PACK:
      return Object.assign({}, state, action.pack.payments);
    case RECEIVE_PAYMENT:
      return Object.assign({}, state, { [action.payment.id]: action.payment });
    case REMOVE_PAYMENT:
      let newState = Object.assign({}, state);
      delete newState[action.paymentId];
      return newState;
    default:
      return state;
  }
};

export default PaymentsReducer;