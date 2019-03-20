
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class StatsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>StatsScreen</Text>
            </View>
        );
    }
}
export default StatsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});