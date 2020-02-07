export const  actionTypes = {
    addTask:"ADD_TASK",
    removeTask:"REMOVE_TASK",
    saveTask: "SAVE_TASK",
    setComplete:"SET_COMPLETE",
    checkIncomplete:"CHECK_INCOMPLETE",
    sortList:":SORT_LIST"
};
export const sorterOrder={
    az:"aToZ",
    za:"zToA",
    creationDate:"default"
};

export function checkIncomplete (completedFilter){
 return {type: actionTypes.checkIncomplete, completedFilter}
}

export function sortList() {
    return {type:actionTypes.sortList}
}
export function addTask(payload) {
    return {type:actionTypes.addTask,payload}
}
export function removeTask(payload) {
    return {type:actionTypes.removeTask,payload}
}
export function saveTask(payload) {
    return {type:actionTypes.saveTask,payload}
}
export function setComplete(payload) {
    return {type: actionTypes.setComplete,payload}
}