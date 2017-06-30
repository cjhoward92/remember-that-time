import type { Action,
              AddEntryAction,
              RemoveEntryAction } from '../../actions';
import type { Entry } from '../../types';

function addEntryState(state: Array<Entry> = [], action: AddEntryAction): Array<Entry> {
  const entry = action.entry;
  entry.id = state.length + 1;
  const newState = state.slice();
  newState.push(entry);
  return newState;
}

function removeEntryState(state: Array<Entry> = [], action: RemoveEntryAction): Array<Entry> {
  return state.filter((entry) => {
    if (entry.id === action.id) return false;
    return true;
  });
}

export default function entries(state: Array<Entry> = [], action: Action): Array<Entry> {
  if (action.type === 'ADD_ENTRY') {
    return addEntryState(state, action);
  } else if (action.type === 'REMOVE_ENTRY') {
    return removeEntryState(state, action);
  }
  return state;
}
