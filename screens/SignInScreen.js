import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import * as firebase from 'firebase'


class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: '',
        })
    }


    lognInUser = (email, password)=>{
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).
            then(function(user){
                console.log(user)
            })
            this.props.navigation.navigate('App')
        }catch(error)
        {
            console.log(error,toString())
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}> Gradesk </Text>
            <Input
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'Enter your email...'
            label='Email'
            onChangeText={email => this.setState({ email})}
            value = {this.state.email}
            />
            <Input 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'Enter your email...'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value = {this.state.password}
            />
                <Button title="Complete Sign In" onPress={() => this.lognInUser(this.state.email, this.state.password)}>Log In</Button>
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }, text: {
        color: 'black',
        fontWeight : '700',
        fontSize: 70,
        textAlign: 'center',
        marginTop: 50,


    }
});