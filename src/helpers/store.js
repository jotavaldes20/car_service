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

//const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);