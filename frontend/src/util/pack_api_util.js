import axios from 'axios';

export const getPacks = data => {
  return axios.post('/api/packs/join', data)
};

export const getPack = id => {
  return axios.get(`/api/packs/${id}`)
};

export const getUserPacks = id => {
  return axios.get(`/api/packs/user/${id}`)
};

export const createPack = data => {
  return axios.post('/api/packs/new', data)
}

export const updatePack = data => {
  return axios.put(`/api/packs/${data.id}/update`, data)
}

export const leavePack = data => {
  return axios.put(`/api/packs/${data.pack}/leave/${data.user}`)
}

export const deletePack = id => {
  return axios.delete(`/api/packs/${id}`)
}