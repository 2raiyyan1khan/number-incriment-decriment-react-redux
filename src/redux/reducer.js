import * as actionType from "./ActionType";

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCRIMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.DECRIMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
