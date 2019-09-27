import axios from 'axios';

export const getPayments = (packId) => {
  return axios.get(`/api/packs/${packId}`)
};

export const createPayment = (packId, payment) => {
  return axios.post(`/api/packs/${packId}/payments`, payment)
};

export const updatePayment = (packId, payment) => {
  return axios.put(`/api/packs/${packId}/payments/${payment.id}`, payment)
};

export const deletePayment = (packId, paymentId) => {
  return axios.delete(`/api/packs/${packId}/payments/${paymentId}`, paymentId)
};