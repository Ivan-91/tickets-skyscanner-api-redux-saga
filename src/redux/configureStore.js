import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux';
import authReducer from './auth'
import { setTicketsReducer, setDateReducer } from './priceReducer';
import sagaWatcher from '../sagas';

const saga = createSagaMiddleware()


const rootReducer = combineReducers({
    tickets: setTicketsReducer,
    auth: authReducer,
    setDate: setDateReducer
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const configureStore =  createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, saga)))

// saga.run(sagaWatcher)


// export default configureStore;

export default function configureStore(initialState) {
    const middleware = [saga];
       
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
       
    saga.run(sagaWatcher);
       
    return store;
   }