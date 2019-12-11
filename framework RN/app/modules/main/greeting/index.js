/* eslint-disable react/require-optimization */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import { increaseCounter, decreaseCounter } from '../mainActions';

class CounterApp extends Component {
  render() {
    const {
      navigation,
      increaseCounter,
      decreaseCounter,
      counter,
    } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity onPress={() => increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{counter}</Text>
          <TouchableOpacity onPress={() => decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={() => navigation.navigate('item')}>
          <Text>TEST</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.main.counter,
});

const mapDispatchToProps = {
  increaseCounter: () => increaseCounter(),
  decreaseCounter: () => decreaseCounter(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
