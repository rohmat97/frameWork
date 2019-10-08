import { connect } from 'react-redux';
import Provience from './View';
import { getSumRingByProvience as getSumRingByProvienceProps } from '../dashboardActions';

const mapStateToProps = state => ({
  wh_name: state.session.wh_name,
  company_id: state.session.company_id,
  getSumRingByProvienceResponse: state.dashboard.getSumRingByProvienceResponse,
});

const mapDispatchToProps = {
  getSumRingByProvience: payload => getSumRingByProvienceProps(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Provience);
