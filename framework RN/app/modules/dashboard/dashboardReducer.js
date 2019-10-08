import * as DASHBOARD from './dashboardConstants';

const getCompanyInitialState = {
  getCompanyFetch: false,
  getCompanyParam: {},
  getCompanyResponse: [],
  getCompanyError: {},
};

const getCashCountInitialState = {
  getCashCountFetch: false,
  getCashCountParam: {},
  getCashCountResponse: [],
  getCashCountError: {},
};

const getSumRingByRegionInitialState = {
  getSumRingByRegionFetch: false,
  getSumRingByRegionParam: {},
  getSumRingByRegionResponse: [],
  getSumRingByRegionError: {},
};

const getSumRingByProvienceInitialState = {
  getSumRingByProvienceFetch: false,
  getSumRingByProvienceParam: {},
  getSumRingByProvienceResponse: [],
  getSumRingByProvienceError: {},
};

const getListRingInitialState = {
  getListRingFetch: false,
  getListRingParam: {},
  getListRingResponse: {
    data: [],
    last_page: 0,
  },
  getListRingError: {},
};

const getListPagingRingInitialState = {
  getListPagingRingFetch: false,
  getListPagingRingParam: {},
  getListPagingRingResponse: {
    data: [],
    last_page: 0,
  },
  getListPagingRingError: {},
};

const dashboardInitialState = {
  ...getCompanyInitialState,
  ...getCashCountInitialState,
  ...getSumRingByRegionInitialState,
  ...getSumRingByProvienceInitialState,
  ...getListRingInitialState,
  ...getListPagingRingInitialState,
  action: '',
};

export const dashboardReducers = (state = dashboardInitialState, action) => {
  const { payload, type } = action;
  const actions = {
    [DASHBOARD.GET_COMPANY]: () => ({
      ...state,
      getCompanyFetch: true,
      getCompanyParam: payload,
      action: type,
    }),
    [DASHBOARD.GET_COMPANY_SUCCESS]: () => ({
      ...state,
      getCompanyResponse: payload,
      getCompanyFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_COMPANY_FAILED]: () => ({
      ...state,
      getCompanyError: payload,
      getCompanyFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_CASHCOUNT]: () => ({
      ...state,
      getCashCountFetch: true,
      getCashCountParam: payload,
      action: type,
    }),
    [DASHBOARD.GET_CASHCOUNT_SUCCESS]: () => ({
      ...state,
      getCashCountResponse: payload,
      getCashCountFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_CASHCOUNT_FAILED]: () => ({
      ...state,
      getCashCountError: payload,
      getCashCountFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_SUM_RING_BY_REGION]: () => ({
      ...state,
      getSumRingByRegionFetch: true,
      getSumRingByRegionParam: payload,
      action: type,
    }),
    [DASHBOARD.GET_SUM_RING_BY_REGION_SUCCESS]: () => ({
      ...state,
      getSumRingByRegionResponse: payload,
      getSumRingByRegionFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_SUM_RING_BY_REGION_FAILED]: () => ({
      ...state,
      getSumRingByRegionError: payload,
      getSumRingByRegionFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_SUM_RING_BY_PROVIENCE]: () => ({
      ...state,
      getSumRingByProvienceFetch: true,
      getSumRingByProvienceParam: payload,
      action: type,
    }),
    [DASHBOARD.GET_SUM_RING_BY_PROVIENCE_SUCCESS]: () => ({
      ...state,
      getSumRingByProvienceResponse: payload,
      getSumRingByProvienceFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_SUM_RING_BY_PROVIENCE_FAILED]: () => ({
      ...state,
      getSumRingByProvienceError: payload,
      getSumRingByProvienceFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_LIST_RING]: () => ({
      ...state,
      getListRingFetch: true,
      getListRingParam: payload,
      action: type,
    }),
    [DASHBOARD.GET_LIST_RING_SUCCESS]: () => ({
      ...state,
      getListRingResponse: payload,
      getListRingFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_LIST_RING_FAILED]: () => ({
      ...state,
      getListRingError: payload,
      getListRingFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_LIST_PAGING_RING]: () => ({
      ...state,
      getListPagingRingFetch: true,
      getListPagingRingParam: payload,
      action: type,
    }),
    [DASHBOARD.GET_LIST_PAGING_RING_SUCCESS]: () => ({
      ...state,
      getListRingResponse: {
        ...state.getListRingResponse,
        data: [...state.getListRingResponse.data, ...payload.data],
      },
      getListPagingRingResponse: payload,
      getListPagingRingFetch: false,
      action: type,
    }),
    [DASHBOARD.GET_LIST_PAGING_RING_FAILED]: () => ({
      ...state,
      getListPagingRingError: payload,
      getListPagingRingFetch: false,
      action: type,
    }),
    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
