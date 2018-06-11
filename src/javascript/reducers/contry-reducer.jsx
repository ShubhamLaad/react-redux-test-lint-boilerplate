import _ from "lodash";

const initialState = {
  contries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTRIES':
      return _.assign({}, state, { contries: action.payload })
    default:
      return state;
  }
};
