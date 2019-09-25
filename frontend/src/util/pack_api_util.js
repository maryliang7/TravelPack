import axios from 'axios';

export const getPacks = data => {
  return axios.get('/api/packs', data)
};

export const getPack = id => {
  return axios.get(`/api/packs/${id}`)
};

export const getUserPacks = id => {
  return axios.get(`/api/packs/user/${id}`)
};

export const createPack = data => {
  return axios.post('/api/packs/', data)
}

export const updatePack = data => {
  return axios.put(`/api/packs/${data.id}`, data)
}

export const deletePack = id => {
  return axios.put(`/api/packs/${id}`)
}