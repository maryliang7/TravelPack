import * as APIUtil from '../util/payment_api_util';

export const RECEIVE_PACK = "RECEIVE_PACK";
export const RECEIVE_PAYMENT = "RECEIVE_PAYMENT";
export const REMOVE_PAYMENT = "REMOVE_PAYMENT";

const receivePayments = (payments) => ({
  type: RECEIVE_PACK,
  payments: payments.data
});

const receivePayment = (payment) => ({
  type: RECEIVE_PAYMENT,
  payment: payment.data
});

const removePayment = (paymentId) => ({
  type: REMOVE_PAYMENT,
  paymentId: paymentId.data
});

export const getPayments = (packId, payments) => (dispatch) => APIUtil.getPayments(packId, payments)
  .then(payments => dispatch(receivePayments(payments)));

export const createPayment = (packId, payment) => (dispatch) => APIUtil.createPayment(packId, payment)
  .then(payment => dispatch(receivePayment(payment)));

export const updatePayment = (packId, payment) => (dispatch) => APIUtil.updatePayment(packId, payment)
  .then(payment => dispatch(receivePayment(payment)));

export const deletePayment = (packId, paymentId) => (dispatch) => APIUtil.deletePayment(packId, paymentId)
  .then(paymentId => dispatch(removePayment(paymentId)))
  .catch(err => console.log(err))

