/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Spinner } from 'native-base';
import Styles from './style';

export default class HorizontalScroll extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }

  renderItems() {
    const { children, itemSpacing } = this.props;
    if (!children) {
      return null;
    }

    if (children.length > 1)
      return children.map((child, index) => {
        if (index < children.length - 1) {
          let child = (
            <View
              key={index}
              style={[
                Styles.wrapper,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  marginRight: itemSpacing ? itemSpacing : 0,
                },
              ]}
            >
              {child}
            </View>
          );
        }

        return child;
      });
    return (
      <View
        style={[
          Styles.wrapper,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight: itemSpacing ? itemSpacing : 0,
          },
        ]}
      >
        {children}
      </View>
    );
  }

  render() {
    const { loading } = this.props;
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ marginTop: 16, justifyContent: loading ? 'center' : null }}
      >
        <View style={Styles.list.headerContainer}>
          <Text style={Styles.textFamily}>Cash Count</Text>
          <Text>See All</Text>
        </View>
        {loading ? (
          <Spinner />
        ) : (
          <ScrollView
            style={Styles.list.container}
            {...this.props}
            contentContainerStyle={Styles.list.contentContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {this.renderItems()}
          </ScrollView>
        )}
      </View>
    );
  }
}
