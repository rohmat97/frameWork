import { api } from '../../bootstrap/bootstrapApis';

export const getCompanyApi = payload => {
  const { url, Bearer } = payload;
  api.defaults.headers.common = { Authorization: `Bearer ${Bearer}` };
  return api.get(`${url}/api/eaccounting/get-list-wh`);
};

export const getCashCountApi = payload => {
  const { url, Bearer, company_id } = payload;
  api.defaults.headers.common = { Authorization: `Bearer ${Bearer}` };
  return api.get(
    `${url}/api/eaccounting/get-cash-count?company_id=${company_id}`
  );
};

export const getRingByRegionApi = payload => {
  const { url, Bearer, company_id } = payload;
  api.defaults.headers.common = { Authorization: `Bearer ${Bearer}` };
  return api.get(
    `${url}/api/eaccounting/get-ring-by-region?company_id=${company_id}`
  );
};

export const getRingByProvienceApi = payload => {
  const { url, Bearer, company_id, region_id } = payload;
  api.defaults.headers.common = { Authorization: `Bearer ${Bearer}` };
  return api.get(
    `${url}/api/eaccounting/get-ring-by-provience?company_id=${company_id}&region_id=${region_id}`
  );
};

export const getListRingApi = payload => {
  const { url, Bearer, company_id, region_id, provinsi_id, page } = payload;
  api.defaults.headers.common = { Authorization: `Bearer ${Bearer}` };
  return api.get(
    `${url}/api/eaccounting/get-list-ring?company_id=${company_id}&region_id=${region_id}&provinsi_id=${provinsi_id}&page=${page}`
  );
};
