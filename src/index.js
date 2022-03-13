import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from '../src/redux/configureStore';
// import { ADMIN_ROUTES } from './constants/index';

const store = configureStore();

// ReactDOM.render(
//    <Provider store={store}>
//       <React.StrictMode>
//          <App />
//       </React.StrictMode>
//    </Provider>,
//    document.getElementById('root')
// );



const renderApp = () => ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>,
   document.getElementById('root')
);

// hot reloading
if (process.env.NODE_ENV !== 'production' && module.hot) {
   module.hot.accept('./containers/App', renderApp)
}

renderApp();

// function renderAdminRoutes() {
//    let xhtml = null;
//    xhtml = ADMIN_ROUTES.map((route) => {
//       return (
//          <AdminLayoutRoute
//             key={route.path}
//             route={route}
//          />
//       );
//    });
//    return xhtml;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
