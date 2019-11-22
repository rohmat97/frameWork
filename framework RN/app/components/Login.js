import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Text style={styles.title}>
              Login
          </Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>

          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(211,211,211)'
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(255,255,255)'
  },
  textInput: {
    width: 280,
    height: 45
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221, 97, 97)'
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
});
