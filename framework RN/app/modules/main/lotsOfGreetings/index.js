import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Button } from 'native-base';

class items extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ alignItems: 'center', top: 50 }}>
        <Text>{this.props.counter}</Text>
        <Button
          onPress={() =>navigation.navigate('CounterApp')
          }
        >
          <Text>TEST</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.main.counter,
});

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(items);
