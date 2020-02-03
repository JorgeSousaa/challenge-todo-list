import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TaskComponent from './components/task-component/TaskComponent.js'

const defaultState = { taskList: [] };

const rootReducer = (state = defaultState, action) => {
    const newState = { ...state, taskList: [...state.taskList] };
    switch (action.type) {
        case 'addTask':
            let description = action.payload;
            newState.taskList.push({ done: false, description });
            return newState;
        case 'removeTask':
            newState.taskList.splice(action.payload, 1);
            return newState;
        case 'saveTask':
            newState.taskList[action.payload.index].description = action.payload.newDescription;
            return newState;
        case 'setComplete':
            newState.taskList[action.payload.index].done = action.payload.complete;
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
