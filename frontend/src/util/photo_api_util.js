import axios from 'axios';

export const fetchPhotos = packId => {
  return axios.get(`/api/packs/${packId}/photos/all`);
};

export const fetchPhoto = data => {
  return axios.get(`/api/packs/${data.packId}/photos/${data.photoId}`);
};

export const createPhoto = data => {
  console.log("PHOTO API CREATE");
  return axios.post(`/api/packs/${data.packId}/photos/new`, data);
};

export const uploadPhoto = data => {
  return axios.post(`/api/document/upload`, data);
};

//delete from mongodb
export const deletePhoto = data => {
  console.log("PHOTO API DELETE");
  console.log(data);
  return axios.delete(`/api/packs/${data.packId}/photos/${data.photoId}`, data);
}

//delete from AWS
export const destroyPhoto = id => {
  console.log("PHOTO API DESTROY");
  return axios.delete(`/api/document/${id}`);
  // return axios.delete(`/api/document/1`);

};