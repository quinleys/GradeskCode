import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage
} from "react-native";
import * as firebase from 'firebase'

class AuthLoadingScreen extends Component {

    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAho2KbldJTJzgk79ETS8gu6NeF7c5a2R4",
            authDomain: "gradesk.firebaseapp.com",
            databaseURL: "https://gradesk.firebaseio.com",
            projectId: "gradesk",
            storageBucket: "gradesk.appspot.com",
            messagingSenderId: "137073296927"
        }

        firebase.initializeApp(firebaseConfig);
    }

    constructor() {
        super()
        this.loadApp()
    }

    

    loadApp = async () => {

        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
}
export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});