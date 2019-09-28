import * as APIUtil from '../util/payment_api_util';

export const RECEIVE_PACK = "RECEIVE_PACK";
export const RECEIVE_PAYMENT = "RECEIVE_PAYMENT";
export const REMOVE_PAYMENT = "REMOVE_PAYMENT";

const receivePayments = (payments) => ({
  type: RECEIVE_PACK,
  payments
});

const receivePayment = (payment) => ({
  type: RECEIVE_PAYMENT,
  payment
});

const removePayment = (paymentId) => ({
  type: REMOVE_PAYMENT,
  paymentId
});

export const getPayments = (packId, payments) => (dispatch) => APIUtil.getPayments(packId, payments)
  .then(payments => dispatch(receivePayments(payments)));

export const updatePayment = (packId, payment) => (dispatch) => APIUtil.updatePayment(packId, payment)
  .then(payment => dispatch(receivePayment(payment)));

export const removePayment = (packId, paymentId) => (dispatch) => APIUtil.getPayments(packId, paymentId)
  .then(paymentId => dispatch(removePayment(paymentId)));

