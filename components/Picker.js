import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import {white , grey} from '../utils/styles/Colors'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.label} >{ label }</Text>
            <TextInput
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50,
        width : '100%',
        borderColor: white,
        borderBottomWidth: 2,


    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color : grey,
        fontSize: 17,
        fontWeight: '700',
        width: '100%',

    },
    input : {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color : grey,
        fontSize: 18,
        width: '100%',


    }


})

export { Input };