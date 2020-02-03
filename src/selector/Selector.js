import { createSelector } from 'reselect'


const getTasks = (state) => state.taskList
const getVisibilityFilter = (state)=> state.visibilityFilter  

export const getVisibleTasks = createSelector(
    [getVisibilityFilter,getTasks],(visibilityFilter,taskList)=>{
        switch(visibilityFilter){
            case 'showAll': return taskList;
            case 'showIncomplete': return taskList.filter(task=>!task.done)
        }
    }
)
 