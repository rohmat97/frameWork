/* eslint-disable complexity */
import * as CONS from './mainCons';

const DataInitialState = {
  tableData: [],
};
const mainInitialState = {
  ...DataInitialState,
  counter: 0,
  action: '',
};

export const mainReducers = (state = mainInitialState, action) => {
  switch (action.type) {
    case CONS.ADD_MHS:
      return {
        tableData: action.payload,
        action: action.type,
      };
    case CONS.UPDATE_MHS:
      return {};
    default:
      return state;
  }
};
