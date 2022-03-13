import * as taskAPI from '../api/task';
import * as taskConstants from '../constants/task';

// export const fetchListTaskRequest = () => {
//    return dispatch => {
//       dispatch(fetchListTask());
//       taskAPI.getList().then(res => {
//          dispatch(fetchListTaskSuccess(res.data));
//       })
//       .catch(error => {
//          console.log('err', error);
//          dispatch(fetchListTaskFailed(error));
//       });
//    }
// }

export const fetchListTask = () => {
   return {
      type: taskConstants.FETCH_TASK,
   }
}

export const fetchListTaskSuccess = data => {
   return {
      type: taskConstants.FETCH_TASK_SUCCESS,
      payload: {
         data
      }
   }
}

export const fetchListTaskFailed = error => {
   return {
      type: taskConstants.FETCH_TASK_FAILED,
      payload: {
         error
      }
   }
}


export const filterTask = keyword => ({
   type: taskConstants.FILTER_TASK,
   payload: {
      keyword
   }
});


export const filterTaskSuccess = data => ({
   type: taskConstants.FILTER_TASK_SUCCESS,
   payload: {
      data
   }
});


// ADD TASK
export const addTask = (data) => ({
   type: taskConstants.ADD_TASK,
   payload: data
});

export const addTaskSuccess = data => ({
   type: taskConstants.ADD_TASK_SUCCESS,
   payload: {
      data
   }
});

export const addTaskFailed = error => ({
   type: taskConstants.ADD_TASK_FAILED,
   payload: {
      error
   }
});


// EDIT TASK
export const setEditTask = (editTask) => ({
   type: taskConstants.SET_EDIT_TASK,
   payload: {
      editTask
   }
});

export const updateTask = updateTask => ({
   type: taskConstants.UPDATE_TASK,
   payload: {
      updateTask
   }
});

export const updateTaskSuccess = updateTask => ({
   type: taskConstants.UPDATE_TASK_SUCCESS,
   payload: {
      updateTask
   }
});

export const updateTaskFailed = error => ({
   type: taskConstants.UPDATE_TASK_FAILED,
   payload: {
      error
   }
});


// DELETE
export const setDeleteID = id => ({
   type: taskConstants.SET_DELETE_ID,
   payload: {
      id
   }
});

export const deleteTask = () => ({
   type: taskConstants.DELETE_TASK,
});

export const deleteTaskSuccess = id => ({
   type: taskConstants.DELETE_TASK_SUCCESS,
   payload: {
      id
   }
});

export const deleteTaskFailed = error => ({
   type: taskConstants.DELETE_TASK_FAILED,
   payload: {
      error
   }
});
