
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { SignIn } from './SignInScreen'
import * as firebase from 'firebase'


    

class HomeScreen extends Component {

    constructor(props) {
        super(props);

        var user = firebase.auth().currentUser;

        var name, email, photoUrl, uid, emailVerified;
        
        this.state = {

        name : user.displayName,
        email : user.email,
        photoUrl : user.photoURL,
        emailVerified : user.emailVerified,
        uid : user.uid  
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>  
                    <Text style={styles.hello}>hello, </Text>
                    <Text style={styles.name}>{this.state.name} </Text>
                </View> 
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },title: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    hello : {
        color: '#828D9A',
        fontSize: 17,
        fontWeight: '200',
    },
    name : {
        fontSize: 50,
        fontWeight: '700',

    },
});