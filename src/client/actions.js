// @flow
import type { PhotoItem, Entry } from './types';

export type AddEntryAction = { type: 'ADD_ENTRY', entry: Entry }
export type RemoveEntryAction = { type: 'REMOVE_ENTRY', id: number }
export type AddPhotoAction = { type: 'ADD_PHOTO', photo: PhotoItem }
export type SelectPhotoAction = { type: 'SELECT_PHOTO', photo: PhotoItem }

export type Action =
    | AddEntryAction
    | RemoveEntryAction
    | AddPhotoAction
    | SelectPhotoAction

export function addEntry(entry: Entry): AddEntryAction {
  return { type: 'ADD_ENTRY', entry };
}

export function removeEntry(id: number): RemoveEntryAction {
  return { type: 'REMOVE_ENTRY', id };
}

export function addPhoto(photo: PhotoItem): AddPhotoAction {
  return { type: 'ADD_PHOTO', photo };
}

export function selectPhoto(photo: PhotoItem): SelectPhotoAction {
  return { type: 'SELECT_PHOTO', photo };
}
