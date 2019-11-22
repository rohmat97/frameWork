import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Splash extends Component {
    static navigationOptions = {
        header: null,
    }

    async componentDidMount() {

      setTimeout(()=> {
         this.props.navigation.navigate('Login');
       },2500)

    }
    render() {
        return <View style={styles.container}>
            <Text>
                Ini Splash Screen
            </Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(211,211,211)'
    },

})
