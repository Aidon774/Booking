import React from 'react';
import {StyleSheet, Text, View,Image, StatusBar} from 'react-native';

export default class HomeView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', }}>
                <StatusBar 
       barStyle="light-content" />
      <Image style={{flex: 1, width: null,height: null,flex: 1,position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',}} 
      source={require('../img/DP.jpg')} />
      <Text style={{color: '#fff',fontSize: 27,}}>Welcome To Spider Web Store.</Text>
      
      </View>
        );
    }
}

const styles = StyleSheet.create({
    bookingform: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,  
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
});