/* eslint-disable complexity */
import * as CONS from './mainCons';

const mainInitialState = {
  counter: 0,
  action: '',
};

export const mainReducers = (state = mainInitialState, action) => {
  switch (action.type) {
    case CONS.INCREASE_COUNTER:
      return {
        counter: state.counter + 1,
        action: action.type,
      };
    case CONS.DECREASE_COUNTER:
      return {
        counter: state.counter - 1,
        action: action.type,
      };
    default:
      return state;
  }
};
