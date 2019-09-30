import axios from 'axios';

export const fetchPhotos = packId => {
  return axios.get(`/api/packs/${packId}/photos/all`, packId);
};

export const fetchPhoto = data => {
  return axios.get(`/api/packs/${data.packId}/photos/${data.scheduleId}`);
};

export const createPhoto = data => {
  return axios.post(`/api/packs/${data.packId}/photos/new`, data);
};

export const uploadPhoto = data => {
  return axios.post(`/api/document/upload`, data);
};



export const deletePhoto = id => {
  return axios.delete(`/api/document/${id}`);
};