import React from 'react';
import Timeline from './Timeline.jsx';
import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../style.scss';
import 'jQuery';

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <AddTodo />
                        <VisibleTodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}