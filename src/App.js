import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Title">
          TodoList
        </div>
      </div>
      <div className="AddField">
        <div className="AddTask">
          <input type="text" placeholder="I need a task..." />
          <input type="button" value="Create" />
        </div>
      </div>
      <div className="TaskWindow">
        <div className="TaskView">
          <div className="TaskTitle">
            Tasks
          </div>
          <div className="TaskList">
            <div className="TaskComponent">
              <div className="TaskLine">
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
            <div className="HideTask">
              Hide complete
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
