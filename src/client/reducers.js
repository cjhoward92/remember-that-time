// @flow

import { combineReducers } from 'redux';

import * as entries from './domain/entries/entryReducers';
import * as photos from './domain/photos/photoReducers';

const timelineApp = combineReducers({
  entries,
  photos
});

export default timelineApp;
