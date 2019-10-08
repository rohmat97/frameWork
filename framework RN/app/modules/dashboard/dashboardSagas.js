import { takeLatest, put, call, select } from 'redux-saga/effects';
import {
  GET_COMPANY,
  GET_CASHCOUNT,
  GET_SUM_RING_BY_REGION,
  GET_SUM_RING_BY_PROVIENCE,
  GET_LIST_RING,
  GET_LIST_PAGING_RING,
} from './dashboardConstants';
import {
  getCompanySuccess,
  getCompanyFailed,
  getCashCountSuccess,
  getCashCountFailed,
  getSumRingByRegionFailed,
  getSumRingByRegionSuccess,
  getSumRingByProvienceFailed,
  getSumRingByProvienceSuccess,
  getListRingFailed,
  getListRingSuccess,
  getListPagingRingFailed,
  getListPagingRingSuccess,
} from './dashboardActions';
import { RESPONSE_STATUS } from '../../utils/constants';
import {
  getCompanyApi,
  getCashCountApi,
  getRingByRegionApi,
  getRingByProvienceApi,
  getListRingApi,
} from './dashboardApis';

function* sagaGetCompany(params) {
  try {
    const url = yield select(state => state.session.url);
    const Bearer = yield select(state => state.session.userData.token);
    const response = yield call(getCompanyApi, {
      url,
      Bearer,
      ...params.payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getCompanySuccess(response.data));
        break;
      default:
    }
  } catch (error) {
    if (error.response) yield put(getCompanyFailed(error.response));
  }
}

function* sagaGetCashCount(params) {
  try {
    const url = yield select(state => state.session.url);
    const Bearer = yield select(state => state.session.userData.token);
    const response = yield call(getCashCountApi, {
      url,
      Bearer,
      ...params.payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getCashCountSuccess(response.data));
        break;
      default:
    }
  } catch (error) {
    yield put(getCashCountFailed(error.response));
  }
}

function* sagaGetSumRingByRegion(params) {
  try {
    const url = yield select(state => state.session.url);
    const Bearer = yield select(state => state.session.userData.token);
    const response = yield call(getRingByRegionApi, {
      url,
      Bearer,
      ...params.payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getSumRingByRegionSuccess(response.data));
        break;
      default:
    }
  } catch (error) {
    yield put(getSumRingByRegionFailed(error.response));
  }
}

function* sagaGetSumRingByProvience(params) {
  try {
    const url = yield select(state => state.session.url);
    const Bearer = yield select(state => state.session.userData.token);
    const response = yield call(getRingByProvienceApi, {
      url,
      Bearer,
      ...params.payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getSumRingByProvienceSuccess(response.data));
        break;
      default:
    }
  } catch (error) {
    yield put(getSumRingByProvienceFailed(error.response));
  }
}

function* sagaGetListRing(params) {
  try {
    const url = yield select(state => state.session.url);
    const Bearer = yield select(state => state.session.userData.token);
    const response = yield call(getListRingApi, {
      url,
      Bearer,
      ...params.payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getListRingSuccess(response.data));
        break;
      default:
    }
  } catch (error) {
    yield put(getListRingFailed(error.response));
  }
}

function* sagaGetListPagingRing(params) {
  try {
    const url = yield select(state => state.session.url);
    const Bearer = yield select(state => state.session.userData.token);
    const response = yield call(getListRingApi, {
      url,
      Bearer,
      ...params.payload,
    });
    switch (response.status) {
      case RESPONSE_STATUS.SUCCESS:
        yield put(getListPagingRingSuccess(response.data));
        break;
      default:
    }
  } catch (error) {
    yield put(getListPagingRingFailed(error.response));
  }
}

export default [
  takeLatest(GET_COMPANY, sagaGetCompany),
  takeLatest(GET_CASHCOUNT, sagaGetCashCount),
  takeLatest(GET_SUM_RING_BY_REGION, sagaGetSumRingByRegion),
  takeLatest(GET_SUM_RING_BY_PROVIENCE, sagaGetSumRingByProvience),
  takeLatest(GET_LIST_RING, sagaGetListRing),
  takeLatest(GET_LIST_PAGING_RING, sagaGetListPagingRing),
];
