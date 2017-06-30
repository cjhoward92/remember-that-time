import React from 'react';
import Timeline from './Timeline';
import VisiblePhotolist from '../containers/VisiblePhotoList';
import AddPhoto from '../containers/AddPhoto';
import '../style.scss';

const App = () => (
  <div>
    <div className="sidebar">
      <AddPhoto />
      <VisiblePhotolist />
    </div>
    <div className="main-content">
      <Timeline onClick={() => console.log('clicked')} />
    </div>
  </div>
);

export default App;
