// @flow

import { combineReducers } from 'redux'
import type { Action, AddEntryAction, RemoveEntryAction } from './actions'
import { Entry } from './types'

type State = {
    entries: Array<Entry>
}

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

const timelineApp = combineReducers({
    entries
})

export default timelineApp