import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(thunkMiddleware);
  middlewares.push(loggerMiddleware);
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware )
);