import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { addTask, getList, putTask, deleteTask } from '../api/task';
import { STATUSES, STATUS_CODE } from '../constants/index';
import * as taskActions from '../actions/task';
import * as uiActions from '../actions/ui';
import * as modalActions from '../actions/modal';

/**
 * B1: thực hiện action: Fetch task
 * B2: gọi API: fetch task
 *    B2.1: Hiển thị thanh tiến trình (Loading)
 * B3: kiểm tra status code
 * Nếu thành công . . .
 * Nếu thất bại . . .
 * B4: Tắt loading
 * B5: thực thi các công việc tiếp theo
 */
let initialTasks = [];

function* watchFetchListTaskAction() {
   while (true) {
      yield take(taskTypes.FETCH_TASK);
      // Blocking, chỉ chạy khi take phát hiện dispatch action
      yield put(uiActions.showLoading());
      // yield 'watching fetch list task';
      const res = yield call(getList);
      // Blocking cho tới khi hàm getList chạy xong
      const { status, data } = res;
      if (status === STATUS_CODE.SUCCESS) {
         // dispatch action fetchListTaskSuccess
         yield put(taskActions.fetchListTaskSuccess(data));
         initialTasks = data;
      } else {
         // dispatch action fetchListTaskFailed
         yield put(taskActions.fetchListTaskFailed(data));
      }
      yield delay(500);
      yield put(uiActions.hideLoading());
   }

}



function* filterTaskSaga({ payload }) {
   yield delay(500);
   const { keyword } = payload;
   // const list = yield select(state => state.taskReducer.listTask);
   const list = initialTasks;
   if (keyword === '') {
      yield put(taskActions.filterTaskSuccess(initialTasks));
   } else {
      const filteredTask = list.filter(task =>
         task.title
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase()),
      );
      yield put(taskActions.filterTaskSuccess(filteredTask));
   }
}

// ADD TASK
function* addTaskSaga({ payload }) {
   console.log('payload: ', payload);
   const { title, description } = payload;
   yield put(uiActions.showLoading());
   const res = yield call(addTask, {
      title,
      description,
      status: STATUSES[0].value,
   });
   const { data, status } = res;
   if (status === STATUS_CODE.CREATED) {
      yield put(taskActions.addTaskSuccess(data))
      yield put(modalActions.hideModal());
   } else {
      yield put(taskActions.addTaskFailed(data))
   }
   yield put(uiActions.hideLoading());
}

function* updateTaskSaga({ payload }) {
   const { title, description, status } = payload.updateTask;
   const editTask = yield select(state => state.taskReducer.editTask);
   yield put(uiActions.showLoading());

   if (editTask) {
      let updateTask = {
         id: editTask.id,
         title: title,
         description: description,
         status: +status,
      }
      const res = yield call(putTask, updateTask);
      const { status: connectionStatus, data } = res;
      if (connectionStatus === STATUS_CODE.SUCCESS) {
         yield put(modalActions.hideModal());
         yield put(taskActions.updateTaskSuccess(updateTask));
      } else {
         yield put(uiActions.hideLoading());
         yield put(taskActions.updateTaskFailed(data));
      }
      yield delay(1000);
      yield put(uiActions.hideLoading());
   }
}

// DELETE TASK
function* deleteTaskSaga() {
   const deleteID = yield select(state => state.taskReducer.deleteID);
   if (deleteID) {
      const res = yield call(deleteTask, deleteID);
      yield put(modalActions.hideModal());
      yield put(uiActions.showLoading());
      const { data, status } = res;
      if (status === STATUS_CODE.SUCCESS) {
         yield put(taskActions.deleteTaskSuccess(deleteID));

      } else {
         yield put(taskActions.deleteTaskFailed(data));
      }
   }
   yield delay(1000);
   yield put(uiActions.hideLoading());
}

function* rootSaga() {
   yield fork(watchFetchListTaskAction);
   yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
   yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
   yield takeEvery(taskTypes.UPDATE_TASK, updateTaskSaga);
   yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
