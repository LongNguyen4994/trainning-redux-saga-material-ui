import AdminHomePage from '../containers/AdminHomePage/index';
import TaskBoard from '../containers/TaskBoard/index';

export const API_ENDPOINT = "https://61b8a85838f69a0017ce5cb2.mockapi.io/api";

export const STATUSES = [
   {
      value: 0,
      label: 'READY'
   },
   {
      value: 1,
      label: 'IN PROGRESS'
   },
   {
      value: 2,
      label: 'COMPLETED'
   }
];


export const STATUS_CODE = {
   SUCCESS: 200,
   CREATED: 201,
   UPDATED: 202,
}


// ROUTER
// export const ADMIN_ROUTES = [
//    {
//       path: '/',
//       name: 'Trang Quan Tri',
//       element: AdminHomePage,
//    },
//    {
//       path: '/task-board',
//       name: 'Quan Ly Cong Viec',
//       element: TaskBoard,
//    }
// ];
