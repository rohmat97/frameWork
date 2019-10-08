/* eslint-disable react/require-optimization */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setLoading as setLoadingProps,
  setUrlModal as setUrlModalProps,
} from './bootstrapActions';

class Bootstrap extends Component {
  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}

Bootstrap.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const styles = {
  container: {
    flex: 1,
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bootstrap);
