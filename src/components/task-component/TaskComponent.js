import React from 'react';

export default class TaskComponent extends React.PureComponent {
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
                        <input type="button" value="Delete" />
                    </div>
                </div>
            </div>
        );
    }
}