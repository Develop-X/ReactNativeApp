import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#199C9E',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#199C9E',
        color: '#fff'
    }
});

const onLoginButtonPress = () => {
    Alert.alert('Logged In!');
};

const onSignUpButtonPress = () => {
    Alert.alert('Signed Up!');
};

class LoginForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='Email or Mobile Num'
                           placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style={styles.input}
                           returnKeyType="go"
                           ref={(input) => this.passwordInput = input}
                           placeholder='Password'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           secureTextEntry/>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={onLoginButtonPress}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={onSignUpButtonPress}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default LoginForm;