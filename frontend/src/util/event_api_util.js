import axios from 'axios';

export const getEvents = data => {
  return axios.get(`api/packs/${data.packId}/schedules/${data.scheduleId}/events`)
}

export const getEvent = data => {
  return axios.get(`api/packs/${data.packId}/schedules/${data.scheduleId}/events/${data.eventId}`)
}

export const createEvent = data => {
  return axios.post(`api/packs/${data.packId}/schedules/${data.scheduleId}/events`, data)
}

export const updateEvent = data => {
  return axios.put(`api/packs/${data.packId}/schedules/${data.scheduleId}/events/${data.eventId}`, data)
}

export const deleteEvent = data => {
  return axios.delete(`api/packs/${data.packId}/schedules/${data.scheduleId}/events/${data.eventId}`, data)
}