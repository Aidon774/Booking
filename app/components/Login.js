import React, { Component } from 'react';
import {StyleSheet, View,StatusBar, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class Login extends Component{
render () {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <StatusBar 
       barStyle="light-content" />
       <Text style={styles.header}>Admin Login</Text>
       <TextInput 
       placeholder="Username or Email"
       placeholderTextColor="rgba(255,255,255,0.4)"
       returnKeyType="Next"
       onSubmitEditing={() =>this.passwordInput.focus()}
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       style={styles.input} />

     
       <TextInput
       placeholder="Password"
       placeholderTextColor="rgba(255,255,255,0.4)"
       returnKeyType="go"
       secureTextEntry
       style={styles.input}
       ref={(input) => this.passwordInput = input}/>


       <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
       </TouchableOpacity>
      
    </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent: 'center',
    paddingTop:190,

  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#fff',
      paddingHorizontal: 10,
  },
  buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 20,
  },
  buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '900',
  },
  header: {

    alignSelf: 'stretch',
    fontSize: 24,
    color: '#fff',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  
});



