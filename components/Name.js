
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import * as firebase from 'firebase'
import { DB_CONFIG } from './Config'

class Name extends Component {

    constructor(){
        super()

        
        this.database = this.app.databse().ref().child('name');
        this.state = {
            name: 'baaske'
        }
    }

    componentDidMount(){
        this.database.on('value', snap => {
            this.setState({
                name: snap.val()
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Are you not {this.state.name} ? </Text>
            </View>
        );
    }
}
export default Name;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});