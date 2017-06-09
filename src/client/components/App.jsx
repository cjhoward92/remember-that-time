import React from 'react';
import Timeline from './Timeline.jsx';
import Footer from './Footer.jsx';
import VisiblePhotolist from '../containers/VisiblePhotoList'
import AddPhoto from '../containers/AddPhoto'
import '../style.scss';
import 'jQuery';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <AddPhoto />
                    <VisiblePhotolist />
                </div>
                <div className="main-content">
                    <Timeline onClick={() => alert('clicked')} />
                </div>
                <Footer />
            </div>
        )
    }
}