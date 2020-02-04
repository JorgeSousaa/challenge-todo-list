import { createSelector } from 'reselect'


const getAllTasks = (state) => state.taskList
export const getCompletedFilter = (state) => state.completedFilter

export const getTasks = createSelector(
    [getCompletedFilter, getAllTasks], (completedFilter, taskList) => {
        if (completedFilter) {
            return taskList.filter(task => !task.done)
        }
        return taskList;
    }
)
export const getSorter = (state) => state.sorter

export const getSortedTasks = createSelector(
    [getSorter, getTasks], (sorter, taskList) => {
        switch (sorter) {
            case "default":
                             
                return taskList;
            case "aToZ": 
                return taskList.sort((a, b) => a.description.localeCompare(b.description));
            case "zToA":
                return taskList.sort((a, b) => b.description.localeCompare(a.description));
        }
    }
)