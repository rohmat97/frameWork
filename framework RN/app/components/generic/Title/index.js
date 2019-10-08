/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Title as NTitle } from 'native-base';
import PropTypes from 'prop-types';
import Styles from './style';

export default class Title extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }

  getComposedStyle() {
    const composedStyle = [Styles.main];
    const newStyle = {};
    const { color, size, style } = this.props;

    if (color) {
      newStyle.color = color;
    }

    if (size) {
      newStyle.fontSize = size;
    }

    composedStyle.push(newStyle);
    composedStyle.push(style);

    return composedStyle;
  }

  render() {
    const { children } = this.props;
    return (
      <NTitle {...this.props} style={this.getComposedStyle()}>
        {children}
      </NTitle>
    );
  }
}

Title.defaultProps = {
  style: {},
  color: '',
  size: 18,
};

Title.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
};
