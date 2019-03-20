import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import * as firebase from 'firebase'

class WelcomeScreen extends Component {

    componentWillMount(){
        const firebaseConfig = {
            apiKey:'AIzaSyAho2KbldJTJzgk79ETS8gu6NeF7c5a2R4',
            authDomain:'gradesk.firebaseapp.com'
        }

        firebase.initializeApp(firebaseConfig);
    }


    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}> Gradesk </Text>
            
                <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} > Sign In </Button>
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} > Sign Up </Button>
            </View>
        );
    }
}
export default WelcomeScreen
    ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 20,
    }, text: {
        color: 'black',
        fontWeight : '700',
        fontSize: 70,
        textAlign: 'center',
        paddingBottom: 80,
    }, button: {

    }
});