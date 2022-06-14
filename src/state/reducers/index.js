import { combineReducers } from "redux";

import noteReducer from "./todo_note_reducer";
const reducers = combineReducers({
  note: noteReducer,
});

export default reducers;
