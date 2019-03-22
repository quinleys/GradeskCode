import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ClearSomeLocalStorage,
    Alert,
    ScrollView
} from "react-native";
import { Name } from '../components/Name'
import * as firebase from 'firebase'

import { Button } from '../components/Button'

import { withNavigation } from 'react-navigation';
import { Input } from '../components/Input'
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';
class EditScreen extends Component {

    

    constructor(props) {
        super(props);

        var user = firebase.auth().currentUser;

        var name, email, photoUrl, uid, emailVerified;
        
        this.state = {
            newPassword: '',
            newEmail: '',
            newName: '',
        name : user.displayName,
        email : user.email,
        photoUrl : user.photoURL,
        emailVerified : user.emailVerified,
        uid : user.uid  

        }
    }

        signOutUser = async () => {
            try {
                await firebase.auth().signOut();
                console.log('logged out');
                this.props.navigation.navigate('Welcome')
            } catch (e) {
                console.log(e);
            }
        }
        
        onChangePasswordPress = () => {
            var user = firebase.auth().currentUser;
            user.updatePassword(this.state.newPassword).then(() => {
                Alert.alert('Password was changed!')
                console.log('password Changed')
            }).catch((error) => {
                Alert.alert('error.message')
            })
        }
        onChangeEmailPress = () => {
            var user = firebase.auth().currentUser;
            user.updateEmail(this.state.newEmail).then(() => {
                Alert.alert('Email was changed!')
                console.log('Email Changed')
            }).catch((error) => {
                Alert.alert('error.message')
            })
        }
        editDone = () => {
            this.onChangeEmailPress()
            this.onChangePasswordPress()

        }
        goToSettings = () => {
            try {
            this.props.navigation.navigate('Settings')
            console.log('Settings')
            } catch(e){
                console.log(e);
            }
        }
        deleteAccount = () => {
            var user = firebase.auth().currentUser;
            user.delete().then(function() {
                try{
                this.props.navigate.navigation('Welcome')
                Alert.alert('User succesfully Deleted')}catch(e){
                    Alert.alert('User not deleted')
                }
              }).catch(function(error) {
                Alert.alert('User not deleted')
              });
        }
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>Edit</Text>
            <View>
                <Text  style={styles.text}>name: {this.state.name}</Text>
                
                <Text  style={styles.text}>email: {this.state.email}</Text>
                <Input 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'New Email'
            onChangeText={(text) => this.setState({ newEmail: text })}
            value = {this.state.newEmail}
            />
                <Input 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'New Password'
            secureTextEntry
            onChangeText={(text) => this.setState({ newPassword: text })}
            value = {this.state.newPassword}
            />
                <Button title='New Password' onPress={this.onChangePasswordPress}>change password</Button>
                <Button title='New Email' onPress={this.onChangeEmailPress}>change email</Button>
                <Button title='Show Dialog' onPress={() => {
                                            this.setState({ visible: true });
                                            }}>Delete Account</Button>


                
                        <Button title='Done' onPress={this.goToSettings}>Done</Button>
                </View>
                <View style={styles.dialog}>
                <Dialog
                        visible={this.state.visible}
                        width = {0.8}
                        dialogTitle={<DialogTitle title="Deleting Account!" />}
                        dialogAnimation={new ScaleAnimation({
                            toValue: 0, // optional
                            useNativeDriver: true, // optional
                          })}
                        
                        onTouchOutside={() => {
                        this.setState({ visible: false });
                        }}
                        footer={
                            <DialogFooter>
                              <DialogButton
                                text="CANCEL"
                                onPress={() => {this.setState({ visible: false });}}
                              />
                              <DialogButton
                                text="YES"
                                onPress={() => {this.deleteAccount()}}
                              />
                            </DialogFooter>
                          }
                        > 
                        <DialogContent>
                            <Text>Are you sure you want to delete your account? This will be permanent!</Text>
                        </DialogContent>
                        </Dialog>
                        </View>
            </View>
            </ScrollView>
        );
    }
}
export default EditScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        paddingBottom: 0
    },text: {
        
        fontSize: 25,
        fontWeight: '200',
    },title : {
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
        paddingBottom:20
        

    },little: {
        paddingTop: 20,
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '100',
    },dialog : {
        height : 300,
        width : 0.6,
    }
    
});