
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import Calender from '../components/Calender'

class AgendaScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
             <Calender></Calender>
            </View>
        );
    }

}
export default AgendaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});