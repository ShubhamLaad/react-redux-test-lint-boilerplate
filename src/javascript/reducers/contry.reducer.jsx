import _ from 'lodash';
import ActionConst from '../constants/action.const';

const initialState = {
  contries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.SET_CONTRIES:
      return _.assign({}, state, { contries: action.payload });
    default:
      return state;
  }
};
