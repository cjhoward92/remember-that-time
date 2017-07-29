import React from 'react';
import Timeline from './Timeline.jsx';
import VisiblePhotolist from '../containers/VisiblePhotoList.jsx';
import AddPhoto from '../containers/AddPhoto.jsx';
import '../../public/styles/style.scss';

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
