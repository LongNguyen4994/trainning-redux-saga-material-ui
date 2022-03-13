import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

// const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
//    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__({
//       shouldHotReload: false,
//    })
//    : compose;

const configureStore = (preloadedState) => {
   // create the saga middleware
   const sagaMiddleware = createSagaMiddleware();
   const middlewares = [thunkMiddleware, sagaMiddleware];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [middlewareEnhancer];
   const composedEnhancers = composeWithDevTools(...enhancers);

   const store = createStore(rootReducer, preloadedState, composedEnhancers);

   // run the saga
   sagaMiddleware.run(rootSaga)

   // hot reloading
   if (process.env.NODE_ENV !== 'production' && module.hot){
      module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
   }

   return store;
};

export default configureStore;
