
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import PercentageCircle from 'react-native-percentage-circle';
import HomeScreen, {stresslevel} from '../screens/HomeScreen';
import { mainBackground , white } from '../utils/styles/Colors'
import {Dimensions} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'

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
                <ScrollView style={{flex : 1,overflow : 'visible', }}>
                    <View style={styles.body}>
                    <Text style={styles.bigTitle}>Average Stresslevel</Text>
                        <ScrollView horizontal={true} style={{flex : 1,overflow : 'visible', }}>
                            <View style={styles.pageView}>
                                <PercentageCircle 
                                    radius={100} 
                                    percent={this.state.stresslevel} 
                                    color={"#7061e3"} 
                                    innerColor={mainBackground} 
                                    borderWidth={18}
                                    textStyle={{fontSize: 24}}
                                    style={styles.pageView}>
                                </PercentageCircle>
                                <Text style={styles.textStyle}>Today</Text>
                                </View>
                            <View style={styles.pageView}>
                                <PercentageCircle 
                                    radius={100} 
                                    percent={this.state.score} 
                                    color={"#7061e3"} 
                                    innerColor={mainBackground} 
                                    borderWidth={18}
                                    textStyle={{fontSize: 24}}
                                    style={styles.pageView}
                                    >
                                </PercentageCircle>
                                <Text style={styles.textStyle}>This month</Text>
                            </View>
                            <View style={styles.pageView}>
                                <PercentageCircle 
                                    radius={100} 
                                    percent={this.state.hoursStudied} 
                                    color={"#7061e3"} 
                                    innerColor={mainBackground} 
                                    borderWidth={18}
                                    textStyle={{fontSize: 24}}
                                    style={styles.pageView}
                                    >
                                </PercentageCircle>
                                <Text style={styles.textStyle}>This year</Text>
                                </View>
                                </ScrollView>
                                </View>

                                <View style={styles.body}>
                                <Text style={styles.bigTitle}>Average Study Time</Text>
                                <ScrollView horizontal= 'true' style={{overflow : 'visible',}}>
                                <View style={styles.pageView}>
                                    <LineChart
                                        data={{
                                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                        datasets: [{
                                            data: [
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            ]
                                        }]
                                        }}
                                        width={Dimensions.get('window').width - 45} // from react-native
                                        height={220}
                                        yAxisLabel={'h:'}
                                        chartConfig={{
                                        backgroundColor: '#2c2c37',
                                        backgroundGradientFrom: '#bc64ba',
                                        backgroundGradientTo: '#7061e3',
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        }
                                        }}
                                        bezier
                                        style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                        }}
                                    />
                                    <Text style={styles.textStyle}>This week</Text>
                                </View>
                                <View style={styles.pageView}>
                                    <LineChart
                                        data={{
                                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', ],
                                        datasets: [{
                                            data: [
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            ]
                                        }]
                                        }}
                                        width={Dimensions.get('window').width - 45} // from react-native
                                        height={220}
                                        yAxisLabel={'h:'}
                                        chartConfig={{
                                        backgroundColor: '#2c2c37',
                                        backgroundGradientFrom: '#bc64ba',
                                        backgroundGradientTo: '#7061e3',
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        }
                                        }}
                                        bezier
                                        style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                        }}
                                    />
                                    <Text style={styles.textStyle}>This month</Text>
                                </View >
                                </ScrollView>
                                </View>
                                <View style={styles.body}>
                                <Text style={styles.bigTitle}>Average Sleep Time</Text>
                                <ScrollView horizontal= 'true'>
                                <View style={styles.pageView}>
                                    <BarChart
                                        data={{
                                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                        datasets: [{
                                            data: [
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            ]
                                        }]
                                        }}
                                        width={Dimensions.get('window').width - 45} // from react-native
                                        height={220}
                                        yAxisLabel={'h:'}
                                        chartConfig={{
                                        backgroundColor: '#2c2c37',
                                        backgroundGradientFrom: '#bc64ba',
                                        backgroundGradientTo: '#7061e3',
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        }
                                        }}
                                        bezier
                                        style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                        }}
                                    />
                                    <Text style={styles.textStyle}>This week</Text>
                                </View>
                                <View style={styles.pageView}>
                                    <BarChart
                                        data={{
                                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', ],
                                        datasets: [{
                                            data: [
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            Math.random() * 12,
                                            ]
                                        }]
                                        }}
                                        width={Dimensions.get('window').width - 45} // from react-native
                                        height={220}
                                        yAxisLabel={'h:'}
                                        chartConfig={{
                                        backgroundColor: '#2c2c37',
                                        backgroundGradientFrom: '#bc64ba',
                                        backgroundGradientTo: '#7061e3',
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        }
                                        }}
                                        bezier
                                        style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                        }}
                                    />
                                    <Text style={styles.textStyle}>This month</Text>
                                </View>
                                </ScrollView>
                                </View>
                </ScrollView>
            </View>
        );
    }
}
export default StatsScreen;

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow : 'visible',
        backgroundColor: mainBackground,
        padding: 20,
        paddingTop: 50,
        paddingBottom: 0,
        
    },body : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow : 'visible'

    },title : {
        fontSize: 50,
        fontWeight: '700',
        color: white ,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        overflow : 'visible',
    },containerCircle: {
        flex: 1,
        justifyContent: 'center',
    }, baseCircle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
        overflow : 'visible',
    }, circle: {
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainBackground,
        overflow : 'visible',
    }, textCircle: {
        color: white ,
        fontWeight: 'bold',
        overflow : 'visible',
    }, textStyle: {
        color: white ,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 18,
        marginBottom: 16,
        overflow : 'visible',
    }, pageView: {
        textAlign: 'center',
        justifyContent : 'center',
        overflow : 'visible',
        paddingRight: 40,
    }, bigTitle : {
        fontSize: 30,
        fontWeight: '500',
        color: white,
        textAlign: 'center',
        overflow : 'visible',
        paddingTop : 20,
        paddingBottom : 20
    }
});