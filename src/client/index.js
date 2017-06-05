import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import timelineApp from './reducers'
import App from './components/App.jsx'


let store = createStore(timelineApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)