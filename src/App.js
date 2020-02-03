import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/add-task/AddTask.js'
import TaskComponent from './components/task-component/TaskComponent.js'
import { connect } from 'react-redux';
import { getTasks } from './selector/Selector.js'
import { getCompletedFilter } from './selector/Selector.js'

class App extends React.PureComponent {

  constructor(props) {

    super(props);

  }

  addTask() {
    this.props.addTask();
  }

  checkIncomplete = () => {
    console.log(this.props.completedFilter)
    this.props.checkIncomplete(!this.props.completedFilter)
  }

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
              Tasks
          </div>
            <div className="TaskList">
              {
                this.props.taskList.map((value, index) => {
                  return <TaskComponent taskValue={value.done} taskDescription={value.description} index={index} />
                })
              }
            </div>
            <div className="HideTask">
              <input type="checkbox" value={this.props.completedFilter} onClick={this.checkIncomplete} />Hide complete
          </div>
          </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    taskList: getTasks(state),
    completedFilter: getCompletedFilter(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => {
      dispatch({ type: "addTask" });
    },
    checkIncomplete: (payload) => {
      dispatch({ type: "checkIncomplete", payload })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
