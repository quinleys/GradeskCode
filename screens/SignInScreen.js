import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import { LinearTextGradient } from 'react-native-text-gradient';

import { Input } from '../components/Input'
import { Button } from '../components/Button'

import * as firebase from 'firebase'




class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            userCredentials: '',
            email: '',
            password: '',
        })
    }


    lognInUser = (email, password)=>{
        try{
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                   .then((s)=> {
            this.props.navigation.navigate('App');
          })
          
        } catch { 
            Alert.alert('Account does not exist')
            console.log('catch error')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <LinearTextGradient
                    style={{ fontWeight: 'bold', fontSize: 72 }}
                    locations={[0, 1]}
                    colors={['#bc64ba', '#7061e3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    Gradesk
                </LinearTextGradient> */}
                <Text style={styles.text}>Gradesk</Text>
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
                placeholder= 'Enter your password...'
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
    }
});