import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './style';

export default class Padder extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const { children, style } = this.props;
    return <View style={[Styles.container, style]}>{children}</View>;
  }
}

Padder.defaultProps = {
  style: {},
};

Padder.propTypes = {
  style: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};
