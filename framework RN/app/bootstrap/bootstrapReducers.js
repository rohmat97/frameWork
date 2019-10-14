import { combineReducers } from 'redux';
import { SET_LOADING, SET_URL_MODAL } from './bootstrapConstants';
import {mainReducers} from '../modules/main/mainReducers';

const bootstrapReducers = combineReducers({
  main: mainReducers,
});

export default bootstrapReducers;
