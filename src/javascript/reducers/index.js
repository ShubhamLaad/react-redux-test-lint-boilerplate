import { combineReducers } from 'redux';
import contryReducer from "./contry-reducer";

const reducers = {
  contryReducer,
};
const rootReducer = combineReducers(reducers);
export default rootReducer;