import { connect } from 'react-redux';
import DetailProvience from './View';
import {
  getListRing as getListRingProps,
  getListPagingRing as getListPagingRingProps,
} from '../dashboardActions';

const mapStateToProps = state => ({
  wh_name: state.session.wh_name,
  company_id: state.session.company_id,
  getListRingFetch: state.dashboard.getListRingFetch,
  getListRingResponse: state.dashboard.getListRingResponse,
  getListPagingRingFetch: state.dashboard.getListPagingRingFetch,
  getListPagingRingResponse: state.dashboard.getListPagingRingResponse,
});

const mapDispatchToProps = {
  getListRing: payload => getListRingProps(payload),
  getListPagingRing: payload => getListPagingRingProps(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailProvience);
