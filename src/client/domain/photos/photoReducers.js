import R from 'ramda';

import type { Action,
              AddPhotoAction,
              SelectPhotoAction } from '../../actions';
import type { PhotoItem } from '../../types';

function addPhoto(state: Array<PhotoItem> = [], action: AddPhotoAction): Array<PhotoItem> {
  const newState = R.clone(state);
  newState.push(action.photo);
  return newState;
}

function selectPhoto(state: Array<PhotoItem> = [], action: SelectPhotoAction): Array<PhotoItem> {
  return state.map((p) => {
    const photo = R.clone(p);
    if (photo.src === action.photo.src) {
      photo.isSelected = !photo.isSelected;
    }
    return photo;
  });
}

export default function photos(state: Array<PhotoItem> = [], action: Action): Array<PhotoItem> {
  if (action.type === 'ADD_PHOTO') {
    return addPhoto(state, action);
  } else if (action.type === 'SELECT_PHOTO') {
    return selectPhoto(state, action);
  }
  return state;
}
