import axiosService from '../common/axiosService';
import { API_ENDPOINT } from '../constants/index';

// https://61b8a85838f69a0017ce5cb2.mockapi.io/api
const url = 'tasks';

export const getList = () => {
   return axiosService.get(`${API_ENDPOINT}/${url}`);
}

export const addTask = (data) => {
   return axiosService.post(`${API_ENDPOINT}/${url}`, data);
}

export const putTask = (editTask) => {
   let updateID = editTask.id;
   return axiosService.put(`${API_ENDPOINT}/${url}/${updateID}`, editTask);
}

export const deleteTask = (id) => {
   let deleteID = +id;
   return axiosService.delete(`${API_ENDPOINT}/${url}/${deleteID}`);
}
