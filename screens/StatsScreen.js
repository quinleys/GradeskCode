
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import PercentageCircle from 'react-native-percentage-circle';
import HomeScreen, {stresslevel} from '../screens/HomeScreen';

class StatsScreen extends Component {

    constructor(props) {
        super(props);

        var averageStresslevel =  Math.floor(Math.random() * 100) + 1;
        var averageScore =  Math.floor(Math.random() * 20) + 1 ;
        var averageHoursStudied=  Math.floor(Math.random() * 50) + 1 ;
        
        this.state = {

        // Stresslevel  
        stresslevel : averageStresslevel,

        // Score  
        score : averageScore,

        // Study time
        hoursStudied : averageHoursStudied,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Statistics</Text>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.containerCircle}>
                            <View style={styles.baseCircle}>
                                <View style={styles.circle}>
                                    <Text style={styles.textCircle}>D</Text>
                                </View>
                                <View style={styles.circle}>
                                    <Text style={styles.textCircle}>M</Text>
                                </View>
                                <View style={styles.circle}>
                                    <Text style={styles.textCircle}>Y</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.percentCircle}>
                                <PercentageCircle 
                                    radius={100} 
                                    percent={this.state.stresslevel} 
                                    color={"#7061e3"} 
                                    innerColor={"#2c2c37"} 
                                    borderWidth={18}
                                    textStyle={{fontSize: 24}}>
                                </PercentageCircle>
                                <Text style={styles.textStyle}>Average Stresslevel</Text>
                            </View>
                            <View style={styles.percentCircle}>
                                <PercentageCircle 
                                    radius={100} 
                                    percent={this.state.score} 
                                    color={"#7061e3"} 
                                    innerColor={"#2c2c37"} 
                                    borderWidth={18}
                                    textStyle={{fontSize: 24}}
                                    style={styles.percentCircle}>
                                </PercentageCircle>
                                <Text style={styles.textStyle}>Average Score</Text>
                            </View>
                            <View style={styles.percentCircle}>
                                <PercentageCircle 
                                    radius={100} 
                                    percent={this.state.hoursStudied} 
                                    color={"#7061e3"} 
                                    innerColor={"#2c2c37"} 
                                    borderWidth={18}
                                    textStyle={{fontSize: 24}}
                                    style={styles.percentCircle}>
                                </PercentageCircle>
                                <Text style={styles.textStyle}>Average Study Time</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default StatsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        paddingBottom: 0,
        backgroundColor: '#2c2c37',
    },body : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },title : {
        fontSize: 50,
        fontWeight: '700',
        color: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        paddingBottom:20
    },containerCircle: {
        flex: 1,
        justifyContent: 'center',
    }, baseCircle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
    }, circle: {
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#17171c',
    }, textCircle: {
        color: '#FFF',
        fontWeight: 'bold',
    }, percentCircle: {
    }, textStyle: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 18,
        marginBottom: 16,
    }, percentCircle: {
        marginTop: 25,
    }
});