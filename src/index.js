import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import TaskComponent from './components/task-component/TaskComponent.js'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import {actionTypes} from './actions/Actions.js'
import {sorterOrder} from "./actions/Actions";

const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const uuidv4 = require('uuid/v4');

const defaultState = { taskList: [], completedFilter: false, sorter: sorterOrder.creationDate };


const rootReducer = (state = defaultState, action) => {
    const newState = { ...state, taskList: [...state.taskList] };
    switch (action.type) {
        case actionTypes.addTask:
            let description = action.payload;
            newState.taskList.push({ done: false, description, id: uuidv4() });
            return newState;
        case actionTypes.removeTask:
            newState.taskList.forEach((element, index) => {
                if (element.id === action.payload.id) {
                    newState.taskList.splice(index, 1);
                }
            });
            return newState;
        case actionTypes.saveTask:
            newState.taskList.forEach((element, index) => {
                if (element.id === action.payload.id) {
                    element.description = action.payload.newDescription
                }
            });
            return newState;
        case actionTypes.setComplete:
            newState.taskList.forEach((element, index) => {
                if (element.id === action.payload.id) {
                    element.done = action.payload.complete
                }
            });
            return newState;
        case actionTypes.checkIncomplete:
            newState.completedFilter = action.completedFilter;
            return newState;

        case actionTypes.sortList:
            switch(newState.sorter){
                case sorterOrder.az:
                    newState.sorter = sorterOrder.za;break;

                case sorterOrder.za:
                    newState.sorter = sorterOrder.creationDate;break;

                case sorterOrder.creationDate:
                    newState.sorter = sorterOrder.az;break;

                default: newState.sorter=sorterOrder.creationDate;break;
            }
            return newState;

        default: return state;
    }
};

const store = createStoreWithMiddleware(rootReducer);

const load = storage.createLoader(engine);
load(store).then((value) => console.log(store));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
