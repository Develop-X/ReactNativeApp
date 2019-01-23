import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';
import { withNavigation } from 'react-navigation';

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

    handleLogin=()=>{
        this.props.navigation.navigate('home')
    };

    handleSignup=()=>{
        this.props.navigation.navigate('signup')
    };

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
                                  onPress={this.handleLogin}>
                    <Text style={styles.buttonText} >LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={this.handleSignup}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default withNavigation(LoginForm);