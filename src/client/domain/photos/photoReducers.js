import R from 'ramda';

import type { Action, 
              AddPhotoAction,
              SelectPhotoAction } from './actions';
import type { State, PhotoItem } from './types';

export default function photos(state: Array<PhotoItem> = [], action: Action): Array<PhotoItem> {
    if (action.type === 'ADD_PHOTO') {
        return addPhoto(state, action);
    } else if (action.type === 'SELECT_PHOTO') {
        return selectPhoto(state, action);
    }
    return state;
}

function addPhoto(state: Array<PhotoItem> = [], action: AddPhotoAction): Array<PhotoItem> {
    const newState = state.slice();
    newState.push(action.photo);
    return newState;
}

function selectPhoto(state: Array<PhotoItem> = [], action: SelectPhotoAction): Array<PhotoItem> {
    return state.map(p => {
        if (p.src === action.photo.src) {
            p.isSelected = !p.isSelected;
        }
        return p;
    });
}
