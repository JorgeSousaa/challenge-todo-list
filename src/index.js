import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TaskComponent from './components/task-component/TaskComponent.js'

const uuidv4 = require('uuid/v4');

const defaultState = { taskList: [], completedFilter: false, sorter: "default" };

const rootReducer = (state = defaultState, action) => {
    const newState = { ...state, taskList: [...state.taskList] };
    switch (action.type) {
        case 'addTask':
            let description = action.payload;
            newState.taskList.push({ done: false, description, id: uuidv4() });
            return newState;
        case 'removeTask':
            newState.taskList.forEach((element, index) => {
                if (element.id == action.payload.id) {
                    newState.taskList.splice(index, 1);
                }
            });
            return newState;
        case 'saveTask':
            newState.taskList.forEach((element, index) => {
                if (element.id == action.payload.id) {
                    element.description = action.payload.newDescription
                }
            })
            return newState;
        case 'setComplete':
            newState.taskList.forEach((element, index) => {
                if (element.id == action.payload.id) {
                    element.done = action.payload.complete
                }
            })
            return newState;
        case 'checkIncomplete':
            newState.completedFilter = action.payload;
            return newState;

        case 'sortList':

            if (newState.sorter == "aToZ") {
                newState.sorter = "zToA";
                return newState;
            }
            if (newState.sorter  == "zToA") {
                newState.sorter = "default";
                return newState;
            }
            if (newState.sorter  == "default") {
                newState.sorter = "aToZ";
                return newState;
            }
            newState.sorter = "default";
            return newState;

        default: return state;
    }
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
