
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import * as firebase from 'firebase'


class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            userCredentials:'',
            email: '',
            password: '',
        })
    }

    signUpUser = (email, password, userCredentials)=>{

        try{
            if(this.state.password.length < 4){
                alert('Please enter atleast 4 characters')
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((userCredentials)=>{
                    if(userCredentials.user){
                    userCredentials.user.updateProfile({
                        displayName: this.state.userCredentials
                    }).then((s)=> {
                        this.props.navigation.navigate('App');
                    })
                    }
                })
                .catch(function(error) {
                alert(error.message);
                });
        }catch(error){
            console.log(error.toString())
        }
    }
    render() {
        return (
            <View style={styles.container}>
    
            <Text style={styles.text}> Gradesk </Text>
            <Input 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'Enter your name...'
            label='name'
            onChangeText={userCredentials => this.setState({ userCredentials })}
            value = {this.state.userCredentials}
            />
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
                <Button onPress={() => this.signUpUser(this.state.email, this.state.password)}>Sign up</Button>
            </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 20,
    },
    text: {
        color: 'black',
        fontWeight : '700',
        fontSize: 70,
        textAlign: 'center',
        marginTop: 50,


    }
});