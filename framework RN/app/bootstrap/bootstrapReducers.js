import { combineReducers } from 'redux';
import { SET_LOADING, SET_URL_MODAL } from './bootstrapConstants';
import { dashboardReducers } from '../modules/dashboard/dashboardReducer';

const bootstrapInitialState = {
  loading: false,
  changeUrl: false,
  action: '',
};

const bootstrap = (state = bootstrapInitialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        action: action.type,
      };
    case SET_URL_MODAL:
      return {
        ...state,
        changeUrl: action.payload,
        action: action.type,
      };
    default:
      return state;
  }
};

const bootstrapReducers = combineReducers({
  bootstrap,
  dashboard: dashboardReducers,
});

export default bootstrapReducers;
