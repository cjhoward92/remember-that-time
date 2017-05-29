import React from 'react';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{border: 'thin solid blue'}}>
                {this.props.msg}
            </div>
        )
    }
}