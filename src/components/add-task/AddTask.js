import React from 'react';
import { connect } from 'react-redux';
import {addTask} from "../../actions/Actions";


export class AddTask extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            value: ''
        };
    }

    addTask = ()=> {
        this.props.addTask(this.state.value);
    
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="AddTask">
                <input type="text" placeholder="I need a task..." id="addInput" value={this.state.value} onChange={this.handleChange}/>
                <input type="button" value="Create" onClick={this.addTask} />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (payload) => {
        dispatch(addTask());
      }
    }
  }
export default connect(null,mapDispatchToProps)(AddTask);