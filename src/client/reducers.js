// @flow

import { combineReducers } from 'redux'
import type { Action, 
              AddEntryAction,
              RemoveEntryAction, 
              AddPhotoAction, 
              SelectPhotoAction } from './actions'
import type { PhotoItem, State, Entry } from './types'

const globals = {
    nextId: 1
}

function entries(state: Array<Entry> = [], action: Action): Array<Entry> {
    if (action.type === 'ADD_ENTRY') {
        return addEntryState(state, action)
    } else if (action.type === 'REMOVE_ENTRY') {
        return removeEntryState(state, action)
    } else {
        return state;
    }
}

function addEntryState(state: Array<Entry> = [], action: AddEntryAction): Array<Entry> {
    let entry = action.entry
    entry.id = globals.nextId
    globals.nextId++;
    let newState = state.slice()
    newState.push(entry)
    return newState
}

function removeEntryState(state: Array<Entry> = [], action: RemoveEntryAction): Array<Entry> {
    return state.filter((entry) => {
        if (entry.id === action.id) return false
        return true
    })
}

function photos(state: Array<PhotoItem> = [], action: Action): Array<PhotoItem> {
    if (action.type === 'ADD_PHOTO') {
        console.log('Added a photo')
        return addPhoto(state, action)
    } else if (action.type === 'SELECT_PHOTO') {
        return selectPhoto(state, action)
    }

    return state
}

function addPhoto(state: Array<PhotoItem> = [], action: AddPhotoAction): Array<PhotoItem> {
    const newState = state.slice()
    newState.push(action.photo)
    return newState
}

function selectPhoto(state: Array<PhotoItem> = [], action: SelectPhotoAction): Array<PhotoItem> {
    return state.map(p => {
        if (p.src === action.photo.src) {
            p.isSelected = !p.isSelected
        }
        return p
    })
}

const timelineApp = combineReducers({
    entries,
    photos
})

export default timelineApp