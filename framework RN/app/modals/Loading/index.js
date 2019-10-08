import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { Colors } from '../../configs';

export default class Loading extends PureComponent {
  render() {
    const { loading, backPress } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={loading}
        onRequestClose={backPress}
      >
        <View style={styles.fullModal}>
          <Spinner
            isVisible={loading}
            size={100}
            type="Pulse"
            color={Colors.main.primary}
          />
        </View>
      </Modal>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  backPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  fullModal: {
    alignItems: 'center',
    backgroundColor: Colors.main.baseWhite,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    opacity: 0.5,
  },
});
