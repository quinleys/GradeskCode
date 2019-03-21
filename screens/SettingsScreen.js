import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ClearSomeLocalStorage
} from "react-native";
import { Name } from '../components/Name'
import * as firebase from 'firebase'

import { Button } from '../components/Button'

import { withNavigation } from 'react-navigation';

class SettingsScreen extends Component {

    

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

        signOutUser = async () => {
            try {
                await firebase.auth().signOut();
                console.log('logged out');
                this.props.navigation.navigate('Welcome')
            } catch (e) {
                console.log(e);
            }
        }
        

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View>
                <Text  style={styles.text}>name: {this.state.name}</Text>
                <Text  style={styles.text}>email: {this.state.email}</Text>
                <Text style={styles.little}>not you? please log out</Text>
                <Button onPress= {this.signOutUser} >Sign Out</Button>
                </View>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        padding: 20,
        paddingTop: 50,
        paddingBottom: 0
    },text: {
        
        fontSize: 25,
        fontWeight: '200',
    },title : {
        fontSize: 50,
        fontWeight: '700',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        paddingBottom:20
        

    },little: {
        paddingTop: 20,
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '100',
    }
    
});