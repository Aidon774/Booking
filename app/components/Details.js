import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';

export default class Details extends React.Component {
    render() {
        return (
            <View style={styles.bookingform}>

                
            <Text style={styles.header}>Details </Text>
            <Text style={{fontSize:20,color: '#fff', alignItems:'center', justifyContent: 'center', marginBottom: 30}}>Describe any items or issues that will limit the options available to the developers
             These might include corporate or regulatory policies hardware limitations 
             timing requirements memory requirements interfaces to other applications
              specific technologies tools and databases to be used parallel operations
              language requirements communications protocols security considerations
               design conventions or programming standards for example
             if the customers organization will be responsible for maintaining the delivered software </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bookingform: {
        flex: 1,
        alignSelf: 'stretch',
        //alignItems: 'center',
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