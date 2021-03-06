import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timelineApp from './reducers';
import App from './components/App';

const photos = [];
renderer.loadFilesFromUserFolder().forEach((f) => {
  photos.push({
    src: f,
    title: renderer.getFileName(f),
    isSelected: false,
  });
});

const initialState = {
  entries: [],
  photos: [],
};

const store = createStore(timelineApp, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
