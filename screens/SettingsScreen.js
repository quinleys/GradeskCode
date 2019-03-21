import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
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

    // cant log out dont know why? 
    
    logOut () {
        
        firebase.auth().signOut().
        then(function() {
            this.props.navigation.navigate('AuthLoading')
            console.log('log out')
          }).catch(function(error) {
                console.log(error)
                
          });
        
    }
    

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.text}>
                <Text>name: {this.state.name}</Text>
                <Text>email: {this.state.email}</Text>
                <Text>not you? please log out</Text>
                <Button title="Sign Out" onPress= {this.logOut} >Sign Out</Button>
                </View>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },text: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 25,
        fontWeight: '200',
    },
    
});