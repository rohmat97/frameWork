import * as DASHBOARD from './dashboardConstants';

export const getCompany = payload => ({ type: DASHBOARD.GET_COMPANY, payload });
export const getCompanySuccess = payload => ({
  type: DASHBOARD.GET_COMPANY_SUCCESS,
  payload,
});
export const getCompanyFailed = payload => ({
  type: DASHBOARD.GET_COMPANY_FAILED,
  payload,
});

export const getCashCount = payload => ({
  type: DASHBOARD.GET_CASHCOUNT,
  payload,
});
export const getCashCountSuccess = payload => ({
  type: DASHBOARD.GET_CASHCOUNT_SUCCESS,
  payload,
});
export const getCashCountFailed = payload => ({
  type: DASHBOARD.GET_CASHCOUNT_FAILED,
  payload,
});

export const getSumRingByRegion = payload => ({
  type: DASHBOARD.GET_SUM_RING_BY_REGION,
  payload,
});
export const getSumRingByRegionSuccess = payload => ({
  type: DASHBOARD.GET_SUM_RING_BY_REGION_SUCCESS,
  payload,
});
export const getSumRingByRegionFailed = payload => ({
  type: DASHBOARD.GET_SUM_RING_BY_REGION_FAILED,
  payload,
});

export const getSumRingByProvience = payload => ({
  type: DASHBOARD.GET_SUM_RING_BY_PROVIENCE,
  payload,
});
export const getSumRingByProvienceSuccess = payload => ({
  type: DASHBOARD.GET_SUM_RING_BY_PROVIENCE_SUCCESS,
  payload,
});
export const getSumRingByProvienceFailed = payload => ({
  type: DASHBOARD.GET_SUM_RING_BY_PROVIENCE_FAILED,
  payload,
});

export const getListRing = payload => ({
  type: DASHBOARD.GET_LIST_RING,
  payload,
});
export const getListRingSuccess = payload => ({
  type: DASHBOARD.GET_LIST_RING_SUCCESS,
  payload,
});
export const getListRingFailed = payload => ({
  type: DASHBOARD.GET_LIST_RING_FAILED,
  payload,
});

export const getListPagingRing = payload => ({
  type: DASHBOARD.GET_LIST_PAGING_RING,
  payload,
});
export const getListPagingRingSuccess = payload => ({
  type: DASHBOARD.GET_LIST_PAGING_RING_SUCCESS,
  payload,
});
export const getListPagingRingFailed = payload => ({
  type: DASHBOARD.GET_LIST_PAGING_RING_FAILED,
  payload,
});
