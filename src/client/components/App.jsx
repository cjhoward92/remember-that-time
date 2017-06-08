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
            <div className="container-fluid main-content">
                <AddPhoto />
                <VisiblePhotolist />
                <Timeline onClick={() => alert('clicked')} />
                <Footer />
            </div>
        )
    }
}