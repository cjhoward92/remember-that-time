// @flow
import { Entry } from './types'

export type AddEntryAction = { type: 'ADD_ENTRY', entry: Entry }
export type RemoveEntryAction = { type: 'REMOVE_ENTRY', id: number }

export type Action =
    | AddEntryAction
    | RemoveEntryAction

export function addEntry(entry: Entry): AddEntryAction {
    return { type: 'ADD_ENTRY', entry }
}

export function removeEntry(id: number): RemoveEntryAction {
    return { type: 'REMOVE_ENTRY', id }
}