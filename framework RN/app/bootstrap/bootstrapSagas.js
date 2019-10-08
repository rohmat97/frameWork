import { all } from 'redux-saga/effects';
import dashboard from '../modules/dashboard/dashboardSagas';

function* bootstrapSagas() {
  yield all([...dashboard]);
}

export default bootstrapSagas;
