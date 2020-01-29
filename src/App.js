import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/add-task/AddTask.js'
import TaskComponent from './components/task-component/TaskComponent.js'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Title">
          TodoList
        </div>
      </div>
      <div className="AddField">
        <AddTask/>
      </div>
      <div className="TaskWindow">
        <div className="TaskView">
          <div className="TaskTitle">
            Tasks
          </div>
          <div className="TaskList">
            <TaskComponent/>
            <TaskComponent/>
            <TaskComponent/>


          </div>
          <div className="HideTask">
            Hide complete
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
