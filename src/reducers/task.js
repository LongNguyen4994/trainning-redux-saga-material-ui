import * as taskConstants from '../constants/task';
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
   listTask: [],
   editTask: null,
   deleteID: null,
};

const taskReducer = (state = initialState, action) => {
   switch (action.type) {
      case taskConstants.FETCH_TASK:
         state.listTask = [];
         return { ...state }

      case taskConstants.FETCH_TASK_SUCCESS: {
         const { data } = action.payload;
         // state.listTask = data;
         return {
            ...state,
            listTask: data,
         }
      }

      case taskConstants.FETCH_TASK_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return { ...state }
      }

      case taskConstants.FILTER_TASK_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listTask: data
         };
      }

      // ADD TASK
      case taskConstants.ADD_TASK: {
         return {
            ...state
         }
      }

      case taskConstants.ADD_TASK_SUCCESS: {
         const { data } = action.payload;
         toastSuccess('Thêm công việc thành công');
         return {
            ...state,
            listTask: state.listTask.concat([data])
         }
      }

      case taskConstants.ADD_TASK_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
         }
      }

      // EDIT TASK
      case taskConstants.SET_EDIT_TASK: {
         const { editTask } = action.payload;
         return {
            ...state,
            editTask
         }
      }

      case taskConstants.UPDATE_TASK: {
         return {
            ...state
         }
      }

      case taskConstants.UPDATE_TASK_SUCCESS: {
         const { updateTask } = action.payload
         let updateID = updateTask.id;

         let tempListTask = [...state.listTask];

         let updateIndex = tempListTask.findIndex(task => task.id === updateID);
         if (updateIndex !== -1) {
            tempListTask.splice(updateIndex, 1, updateTask);
         }
         toastSuccess('Cập nhật công việc thành công');
         return {
            ...state,
            listTask: tempListTask,
         }
      }

      case taskConstants.UPDATE_TASK_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return { ...state };
      }

      // DELETE TASK
      case taskConstants.SET_DELETE_ID: {
         const { id } = action.payload;
         return {
            ...state,
            deleteID: id,
         }
      }

      case taskConstants.DELETE_TASK_SUCCESS: {
         const { id } = action.payload;
         let tempListTask = [...state.listTask];
         const deleteIndex = tempListTask.findIndex(task => task.id === id);
         if (deleteIndex !== -1) {
            tempListTask.splice(deleteIndex, 1);
         }
         toastSuccess('Xóa công việc thành công');

         return {
            ...state,
            listTask: tempListTask
         }
      }

      case taskConstants.DELETE_TASK_FAILED: {
         const { error } = action.payload;
         toastError(error);
         return { ...state };
      }

      default: return state;
   }
};

export default taskReducer;
