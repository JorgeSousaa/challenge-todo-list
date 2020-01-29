import React from 'react';

export default class AddTask extends React.PureComponent {
    render() {
        return (
            <div className="AddTask">
                <input type="text" placeholder="I need a task..." id="addInput" />
                <input type="button" value="Create" />
            </div>
        );
    }
}