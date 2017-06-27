// @flow

import { combineReducers } from 'redux'

import entries from './domain/entries/entryReducers'
import photos from './domain/photos/photoReducers'

const timelineApp = combineReducers({
    entries,
    photos
})

export default timelineApp