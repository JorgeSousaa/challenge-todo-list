import React from 'react';
import { connect } from 'react-redux';

export class TaskComponent extends React.PureComponent {

    removeTask = () =>{
        this.props.removeTask(this.props.index);
    }
    render() {
        return (
            <div className="TaskComponent">
                <div className="TaskComponentLine">
                    <div className="TaskComponentCheck">
                        <input type="checkbox" value={this.props.taskValue} />
                    </div>
                    <div className="TaskComponentDescription">
                    {
                        this.props.taskDescription
                    }
                    </div>
                    <div className="TaskComponentButton">
                        <input type="button" value="Edit" />
                        <input type="button" value="Delete" onClick={this.removeTask}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      removeTask: (payload) => {
        dispatch({ type: "removeTask",payload });
      }
    }
  }
export default connect(null,mapDispatchToProps)(TaskComponent);