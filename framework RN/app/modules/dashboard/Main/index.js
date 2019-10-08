import { connect } from 'react-redux';
import DasboardMainView from './View';
import {
  logout as logoutProps,
  setCompany as setCompanyProps,
} from '../../auth/authActions';
import {
  getCompany as getCompanyProps,
  getCashCount as getCashCountProps,
  getSumRingByRegion as getSumRingByRegionProps,
} from '../dashboardActions';

const mapStateToProps = state => ({
  sessionAction: state.session.action,
  dashboardAction: state.dashboard.action,
  wh_name: state.session.wh_name,
  company_id: state.session.company_id,
  getCompanyFetch: state.dashboard.getCompanyFetch,
  getCompanyResponse: state.dashboard.getCompanyResponse,
  getCashCountResponse: state.dashboard.getCashCountResponse,
  getCashCountFetch: state.dashboard.getCashCountFetch,
  getSumRingByRegionResponse: state.dashboard.getSumRingByRegionResponse,
  getSumRingByRegionFetch: state.dashboard.getSumRingByRegionFetch,
});

const mapDispatchToProps = {
  logout: () => logoutProps(),
  getCompany: () => getCompanyProps(),
  setCompany: payload => setCompanyProps(payload),
  getCashCount: payload => getCashCountProps(payload),
  getSumRingByRegion: payload => getSumRingByRegionProps(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DasboardMainView);
