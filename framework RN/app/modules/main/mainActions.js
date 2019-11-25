import { AsyncStorage } from 'react-native';
import * as MAIN from './mainCons';

// export const increaseCounter = () => ({ type: MAIN.INCREASE_COUNTER });
// export const decreaseCounter = () => ({ type: MAIN.DECREASE_COUNTER });

export const addMhs = payload => ({ type: MAIN.ADD_MHS, payload });
export const editMhs = payload => ({ type: MAIN.UPDATE_MHS, payload });
