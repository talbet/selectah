import { combineReducers } from 'redux';
import * as types from './types';

/* State Shape
{
  isFinished: bool,
  isInProgress: bool,
  time: number,
  selection: number
}
*/

const timeReducer = (state = 0, action) =>
  (action.type === types.SET_TIME ? action.payload.time : state);

const selectionReducer = (state = 0, action) =>
  (action.type === types.SET_SELECTION ? action.payload.selection : state);

export default combineReducers({
  time: timeReducer,
  selection: selectionReducer,
});
