import {actionTypes, sorterOrder} from "../actions/Actions";

const uuidv4 = require('uuid/v4');

//const defaultState = { taskList: [], completedFilter: false, sorter: sorterOrder.creationDate };

const taskDefault = { taskList: []};
const incompleteDefault = {completedFilter: false};
const sortDefault = { sorter: sorterOrder.creationDate};

export const taskSwitchCaseReducer = (state=taskDefault,action)=>{
    const newState = { ...state, taskList: [...state.taskList] };
    switch (action.type) {
        case actionTypes.addTask:
            newState.taskList.push({ done: false, description:action.payload, id: uuidv4() });
            return newState;

        case actionTypes.removeTask:
            return removeTaskCase(newState,action);

        case actionTypes.saveTask:
            return saveTaskCase(newState,action);

        case actionTypes.setComplete:
            return setCompleteCase(newState,action);

        default: return state;
    }
};
export const taskCheckIncompleteReducer = (state=incompleteDefault,action)=>{
    const newState = { ...state, completedFilter: state.completedFilter };
    if(action.type===actionTypes.checkIncomplete)
        newState.completedFilter = action.completedFilter;
    return newState;
};

export const taskSortListReducer = (state=sortDefault,action)=>{
    const newState = { ...state, sorter: state.sorter };
    if(action.type===actionTypes.sortList)
    {
        switch(newState.sorter){
            case sorterOrder.az:
                newState.sorter = sorterOrder.za;break;

            case sorterOrder.za:
                newState.sorter = sorterOrder.creationDate;break;

            case sorterOrder.creationDate:
                newState.sorter = sorterOrder.az;break;

            default: newState.sorter=sorterOrder.creationDate;break;
        }
    }
    return newState;
};

function removeTaskCase(newState,action){
    newState.taskList.forEach((element, index) => {
        if (element.id === action.payload.id) {
            newState.taskList.splice(index, 1);
        }
    });
    return newState;
}

function saveTaskCase(newState,action) {
    newState.taskList.forEach((element, index) => {
        if (element.id === action.payload.id) {
            element.description = action.payload.newDescription
        }
    });
    return newState;
}

function setCompleteCase(newState,action) {
    newState.taskList.forEach((element, index) => {
        if (element.id === action.payload.id) {
            element.done = action.payload.complete
        }
    });
    return newState;
}
