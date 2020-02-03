import React from 'react';
import { connect } from 'react-redux';

export class TaskComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.taskDescription,
            editable: false
        }
    }

    removeTask = () => {
        this.props.removeTask(this.props.index);
    }
    saveTask = () => {
        this.props.saveTask({ index: this.props.index, newDescription: this.state.value })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    renderDescription = () => {
        if (!this.state.editable) {
            let description = <p>
                {this.state.value}
            </p>;
            return description;
        }
        else {

            let description = <input type="text" value={this.state.value} onChange={this.handleChange} />
            return description;
        }
    };

    makeEditable = () => {
        if(this.state.editable==false){
            this.setState({ editable: true })
        }
        if(this.state.editable==true)
        {
            this.setState({ editable: false })
            this.saveTask();
        }
    }

    getButtonValue=()=>{
        if(!this.state.editable){
            return "Edit";
        }else{
            return "Save";
        }
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
                            this.renderDescription()
                        }
                    </div>
                    <div className="TaskComponentButton">
                        <input type="button" value={this.getButtonValue()} onClick={this.makeEditable} />
                        <input type="button" value="Delete" onClick={this.removeTask} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (payload) => {
            dispatch({ type: "removeTask", payload });
        },
        saveTask: (payload) => {
            dispatch({ type: "saveTask", payload });
        }

    }
}
export default connect(null, mapDispatchToProps)(TaskComponent);