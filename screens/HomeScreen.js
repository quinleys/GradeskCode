
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import SvgUri from 'react-native-svg-uri';
import { SignIn } from './SignInScreen'
import * as firebase from 'firebase'

import { SafeAreaView } from 'react-navigation';   
import Popup from '../components/Popup'

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        var date = new Date().getDate(); 
        var month = new Date().getMonth() + 1;

        var randomStresslevel =  Math.floor(Math.random() * 100) + 1;
        var randomScore =  Math.floor(Math.random() * 20) + 1 ;
        var randomHoursStudied=  Math.floor(Math.random() * 50) + 1 ;
        var user = firebase.auth().currentUser;

        var name, email, photoUrl, uid, emailVerified;
        
        this.state = {

        name : user.displayName,
        email : user.email,
        photoUrl : user.photoURL,
        emailVerified : user.emailVerified,
        uid : user.uid , 

        // Deadline
        deadlineDay : date, 
        deadlineMonth : month,

        // Stresslevel  
        stresslevel : randomStresslevel,

        // Score  
        score : randomScore,

        // Score  
        hoursStudied : randomHoursStudied
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.title}>  
                    <Text style={styles.hello}>hello, </Text>
                    <Text style={styles.name}>{this.state.name} </Text>
                </View> 
                <ScrollView>
                <View style={styles.body}>

                    <View style={styles.row}>
                        <View style={styles.card}> 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Agenda')}>
                            <Text style={styles.cardTitle}>Deadline</Text>
                            <SvgUri
                                width="100"
                                height="100"

                                source={require('../assets/deadline.svg')}
                            />
                            <Text style={styles.cardSubTitle}>{this.state.deadlineDay}/{this.state.deadlineMonth}</Text>
                            </TouchableOpacity>
                        </View>   
                        <View style={styles.card}> 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistics')}>
                            <Text style={styles.cardTitle}>Last Score</Text>
                              <Text style={styles.cardSubTitle}>{this.state.score}/20</Text>
                              </TouchableOpacity>
                        </View> 
                    </View>

                        <View style={styles.row}>
                        
                            <View style={styles.card}>  
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistics')}>
                                <Text style={styles.cardTitle}>Stresslevel</Text>
                                <Text style={styles.cardSubTitle}>{this.state.stresslevel}</Text>
                                <Image
                                    style={{width: 50, height: 50, justifyContent: 'center',
                                    alignItems: 'center'}}

                                    source={require('../assets/heart-png-44643.png')}
                                />
                                </TouchableOpacity>
                            </View> 
                            
                            </View>

                            <View style={styles.row}>
                                <View style={styles.card}> 
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistics')}>
                                    <Text style={styles.cardTitle}>Hours Studied</Text>
                                    <Text style={styles.cardSubTitle}>{this.state.hoursStudied}</Text>
                                    </TouchableOpacity>
                                </View> 
                            </View>
                            <Popup></Popup>
                        
                </View>
                </ScrollView>
            </View> 

        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        padding: 20,
        paddingTop: 50,
        paddingBottom: 0

    },
    body : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
        flex: 1,
        margin : 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
        height: 200,
        borderRadius: 4,
        

    },
    cardTitle: {
        fontSize: 35,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardSubTitle: {
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'center'
    },
    cardText: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center'
    },
    hello : {
        color: '#828D9A',
        fontSize: 20,
        fontWeight: '200',
        
    },
    name : {
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
        

    }, row : {
        flex: 1,
        flexDirection: 'row',
    }, img :{

        alignContent: 'center'
    }
    
});