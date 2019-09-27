import axios from 'axios';

export const getSchedules = packId => {
    return axios.get(`api/packs/${packId}/schedules`)
}

export const getSchedule = data => {
    return axios.get(`api/packs/${data.packId}/schedules/${data.scheduleId}`)
}

export const createSchedule = data => {
    return axios.post(`api/packs/${data.packId}/schedules/`, data)
}

export const updateSchedule = data => {
    return axios.put(`api/packs/${data.packId}/schedules/${data.scheduleId}`, data)
}

export const deleteSchedule = data => {
    return axios.delete(`api/packs/${data.packId}/schedules/${data.scheduleId}`, data)
}