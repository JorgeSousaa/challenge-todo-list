import { createSelector } from 'reselect'
import {sorterOrder} from "../actions/Actions";


const getAllTasks = (state) => {
    return state.taskList.map(item =>{return {...item}});

};
export const getCompletedFilter = (state) => state.completedFilter;

export const getTasks = createSelector(
    [getCompletedFilter, getAllTasks], (completedFilter, taskList) => {
        if (completedFilter) {
            return taskList.filter(task => !task.done)
        }
        return taskList;
    }
);
export const getSorter = (state) => state.sorter;

export const getSortedTasks = createSelector(
    [getSorter, getTasks], (sorter, taskList,tasklist2) => {
        switch (sorter) {
            case sorterOrder.creationDate:
                return taskList;
            case sorterOrder.az:
                return taskList.sort((a, b) => a.description.localeCompare(b.description));
            case sorterOrder.za:
                return taskList.sort((a, b) => b.description.localeCompare(a.description));
            default: return  taskList;
        }
    }
);