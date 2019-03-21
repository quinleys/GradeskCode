import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Card = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop: 20,
        padding: 20,
        width: '100%',
        backgroundColor: '#00aeef',
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