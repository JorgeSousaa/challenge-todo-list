import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/add-task/AddTask.js'
import TaskComponent from './components/task-component/TaskComponent.js'
import { connect } from 'react-redux';

class App extends React.PureComponent {

  constructor(props) {

    super(props);

  }

  addTask() {
    this.props.addTask();
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
                this.props.taskList.map((value,index)=>
                {
                  return <TaskComponent taskValue={value.done} taskDescription={value.description} index={index}/>
                })
              }
            </div>
            <div className="HideTask">
              Hide complete
          </div>
          </div>

        </div>
      </div>
    );
  }
}
  const mapStateToProps = state => {
    return {
      taskList: state.taskList,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      addTask: () => {
        dispatch({ type: "addTask" });
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);
