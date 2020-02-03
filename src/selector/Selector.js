import { createSelector } from 'reselect'


const getAllTasks = (state) => state.taskList
export const getCompletedFilter = (state)=> state.completedFilter

export const getTasks = createSelector(
    [getCompletedFilter,getAllTasks],(completedFilter,taskList)=>{
       if(completedFilter){
            return taskList.filter(task=>!task.done)
       }
       return taskList;
    }
)
 