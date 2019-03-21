
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import SvgUri from 'react-native-svg-uri';
import { SignIn } from './SignInScreen'
import * as firebase from 'firebase'


    

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        var date = new Date().getDate(); 
        var month = new Date().getMonth() + 1;

        var randomStresslevel =  Math.floor(Math.random() * 100) + 1 ;
        var randomScore =  Math.floor(Math.random() * 20) + 1 ;
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

        score : randomScore
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>  
                    <Text style={styles.hello}>hello, </Text>
                    <Text style={styles.name}>{this.state.name} </Text>
                </View> 
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
                            <Text style={styles.cardText}>{this.state.deadlineDay}/{this.state.deadlineMonth}</Text>
                            </TouchableOpacity>
                        </View>   
                        <View style={styles.card}> 
                            <Text style={styles.cardTitle}>Last Score</Text>
                              <Text style={styles.cardText}>{this.state.score}/20</Text>
                        </View> 
                    </View>
                        <View style={styles.row}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistics')}>
                            <View style={styles.card}> 
                            
                                <Text style={styles.cardTitle}>Stresslevel</Text>
                                <Text style={styles.cardText}>{this.state.stresslevel}</Text>
                                <SvgUri
                                width="100"
                                height="100"
                                source={require('../assets/heart.svg')}
                                /> 
                                
                            </View> 
                            </TouchableOpacity>
                        </View>
                </View>
            </View> 
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    body : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        margin: 10,
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

    },
    cardTitle: {
        fontSize: 35,
        fontWeight: '500',
    },
    cardText: {
        fontSize: 20,
        fontWeight: '300',
    },
    title: {
        
    },
    hello : {
        color: '#828D9A',
        fontSize: 17,
        fontWeight: '200',
        
    },
    name : {
        fontSize: 50,
        fontWeight: '700',
        

    }, row : {
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        
    },
    
});