import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { lightBlue } from '../utils/styles/Colors'

const Button = ({onPress, children,}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop: 20,
        padding: 20,
        width: '100%',
        backgroundColor: lightBlue,
        borderRadius: 4,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight : '700',
        fontSize: 18,
    }
});



export { Button }