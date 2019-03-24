
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
import { yellow, blue, red , green , orange, purple ,blueLight, white } from '../utils/styles/Colors'
import Popup from '../components/Popup'

colors = []
snapshot = []
class HomeScreen extends Component {

    constructor(props) {
        super(props);
        var date = new Date().getDate(); 
        var month = new Date().getMonth() + 1;

        var randomStresslevel =  Math.floor(Math.random() * 100) + 1;
        var randomScore =  Math.floor(Math.random() * 20) + 1 ;
        var randomHoursStudied=  Math.floor(Math.random() * 50) + 1 ;
        var user = firebase.auth().currentUser;

        var name, email, photoUrl, uid, emailVerified ;
        
        this.state = {

        name : user.displayName,
        email : user.email,
        photoUrl : user.photoURL,
        emailVerified : user.emailVerified,
        uid : user.uid, 

        // Deadline
        deadlineDay : date, 
        deadlineMonth : month,

        // Stresslevel  
        stresslevel : randomStresslevel,

        // Score  
        score : randomScore,

        // Score  
        hoursStudied : randomHoursStudied,

        colorScore : '#00aeef',
        colorStress : '#00aeef',
        newColors : '',
        newDeadline : '',
        }
    }
    componentDidMount(){
       this.colorScore(this.state.score)
       this.colorStress(this.state.stresslevel)

       firebase.database().ref('/agenda').limitToFirst(1).once('child_added', (snapshot) =>{
        this.setState({
                newColors : snapshot.val().color,
                newDeadline : snapshot.val().date,
                newTitle : snapshot.val().name
                
      }, console.log(snapshot.val().color))
    })
    }

    colorScore = (score) => {
        if( score > 12) { 
            this.setState({ colorScore : green}) 
        }else if(score >10 ){
            this.setState({ colorScore : yellow})
          } 
          else { 
            this.setState({ colorScore : red})
          }
    }
    colorStress = (stresslevel) => {
        if( stresslevel > 70) { 
            this.setState({ colorStress : red}) 
          } else if (stresslevel >= 60 ){
            this.setState({ colorStress : orange}) 
          }
          else if (stresslevel >= 50  ) {
            this.setState({ colorStress : yellow}) 
          } else { 
            this.setState({ colorStress : green})
          }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>  
                    <Text style={styles.hello}>Hello, </Text>
                    <Text style={styles.name}>{this.state.name} </Text>
                </View> 
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.row}>
                            <View style={[styles.card , { backgroundColor: this.state.newColors }]}> 
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Agenda')}>
                                <Text style={styles.cardTitle}>Agenda</Text>
                                <SvgUri
                                    width="100"
                                    height="100"
                                    source={require('../assets/deadline.svg')}
                                />
                                <Text style={styles.cardSubTitle}>{this.state.newTitle}</Text>
                                <Text style={styles.cardSubTitle}>{this.state.newDeadline}</Text>
                                </TouchableOpacity>
                            </View>   
                            <View style={[styles.card , { backgroundColor: this.state.colorScore }]}> 
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistics')}>
                                <Text style={styles.cardTitle}>Last Score</Text>
                                <Text style={styles.cardSubTitle}>{this.state.score}/20</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.card, { backgroundColor: this.state.colorStress}]}>  
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistics')}>
                                <Text style={styles.cardTitle}>Stresslevel</Text>
                                <Text style={styles.cardSubTitle}>{this.state.stresslevel}</Text>
                                <View style={{justifyContent: 'center',
                                    alignItems: 'center',
                                    width : 'auto',
                                    }}>
                                <Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'
                                    }}

                                    source={require('../assets/heart-png-44643.png')}
                                />
                                </View>
                                </TouchableOpacity>
                            </View> 
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.card , { backgroundColor: purple }]}> 
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
    card : {
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
        color : white
        

    },
    cardTitle: {
        fontSize: 35,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        color : white
    },
    cardSubTitle: {
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'center',
        color : white
    },
    cardText: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        color : white
    },
    hello : {
        color: '#828D9A',
        fontSize: 20,
        fontWeight: '300',
        
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
    },
   
    
});