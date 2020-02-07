import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/add-task/AddTask.js'
import TaskComponent from './components/task-component/TaskComponent.js'
import { connect } from 'react-redux';
import { getTasks } from './selector/Selector.js'
import { getCompletedFilter } from './selector/Selector.js'
import { getSortedTasks } from './selector/Selector.js'
import { getSorter } from './selector/Selector.js'
import {checkIncomplete, sortList} from "./actions/Actions";

class App extends React.PureComponent {

  checkIncomplete = () => {
    this.props.checkIncomplete(!this.props.completedFilter)
  };

  sortList=()=>{ 
    this.props.sortList();
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Title">
            TodoList
        </div>
        </div>
        <div className="AddField">
          <AddTask />
        </div>
        <div className="TaskWindow">
          <div className="TaskView">
            <div className="TaskTitle">
              <input type="button" value="Tasks" onClick={this.sortList} />
          </div>
            <div className="TaskList">
              {
                this.props.taskList.map((value) => {
                  return <TaskComponent key={value.id} taskValue={value.done} taskDescription={value.description} id={value.id} />
                })
              }
            </div>
            <div className="HideTask">
              <input type="checkbox" value={this.props.completedFilter} onClick={this.checkIncomplete} defaultChecked={this.props.completedFilter} />Hide complete
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: getSortedTasks(state),
    completedFilter: getCompletedFilter(state),
    sorter: getSorter(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkIncomplete: (payload) => {
     dispatch(checkIncomplete(payload))
    },
    sortList: ()=>{
      dispatch(sortList())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
