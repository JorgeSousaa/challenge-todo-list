import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import {
    taskCheckIncompleteReducer, taskSortListReducer,
    taskSwitchCaseReducer
} from "./reducers/Reducers";

const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const rootReducer = combineReducers({
    taskState: taskSwitchCaseReducer,
    incompleteState: taskCheckIncompleteReducer,
    sortState:taskSortListReducer
});

const store = createStoreWithMiddleware(rootReducer);

const load = storage.createLoader(engine);
load(store).then((value) => console.log(store));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
