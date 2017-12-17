import * as types from './types';

export const setTime = newTime => ({
  type: types.SET_TIME,
  payload: {
    time: newTime,
  },
});

export const setSelection = newSelection => ({
  type: types.SET_SELECTION,
  payload: {
    selection: newSelection,
  },
});

export const incrementSelection = () => ({
  type: types.INCREMENT_SELECTION,
});
