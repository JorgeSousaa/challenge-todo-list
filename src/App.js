import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/add-task/AddTask.js'

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
            <div className="TaskComponent">
              <div className="TaskComponentLine">
                <div className="TaskComponentCheck">
                  <input type="checkbox" value="" />
                </div>
                <div className="TaskComponentDescription">
                  __________________________________________________
                  </div>
                <div className="TaskComponentButton">
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" />
                </div>
              </div>
            </div>
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
