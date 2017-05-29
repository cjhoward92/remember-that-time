import React from 'react';
import Timeline from './Timeline.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Hello World!</h1>
                <p>This is an awesome app bro!</p>
                <Timeline msg={"This is an empty timeline!!!"} />
            </div>
        )
    }
}