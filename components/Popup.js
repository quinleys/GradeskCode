import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet , ActivityIndicator, Image} from 'react-native'
import {white} from '../utils/styles/Colors' 
import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';
import { Button } from '../components/Button';




export class Popup extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
            quotes: [],
            error: null,
            visible: false,
            show : false,

        }
    }

    componentDidMount(){
       fetch('https://api.kanye.rest')
       .then((response)=> {return response.json()})
       .then((responseJson)=>{
           console.log(responseJson)
           this.setState ({
               isLoading: false,
               dataSource:responseJson.quote
               
           })
           console.log('dataloaded')
           console.log(this.state.dataSource)
       })
       .catch(err => {
           console.log(err)
           
           })
       
    }

    newQuote = () => {
        this.componentDidMount()
        this.setState({ visible: true})
    }

    handleOpen = () => {
        this.setState({ show: true })
      }
    
      handleClose = () => {
        this.setState({ show: false })
      }
    deletePopup = ()=>{
        this.setState({
            dataSource: [],
            visible: false
        })
    }
 
    render(){

            return (
            <View>
            <View style={styles.container}>
                <Button
                    title="Show Dialog"
                    onPress={() => {this.newQuote()}}
                >Ask Kanye for help</Button>
                <Dialog
                    visible={this.state.visible}
                    width = {0.8}
                    dialogTitle={<DialogTitle title="Kanye said" />}
                    dialogAnimation={new ScaleAnimation({
                        toValue: 0, // optional
                        useNativeDriver: true, // optional
                      })}
                    onTouchOutside={() => {this.deletePopup()}}
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="Yay Kanye!"
                                onPress={() => {this.deletePopup()}}
                            />
                              
                        </DialogFooter>
                    }
                >
                <DialogContent style={{justifyContent: 'center',
                        alignItems: 'center'}}>
                    <Image style={{width: 200, height: 200,}}
                            source={require('../assets/kanye_head.png')} ></Image>
                        <Text>{this.state.dataSource}</Text>
                    </DialogContent>
                    
                </Dialog>
                </View>
            </View>
            );
            }
            
       
    }

    
    
export default Popup

const styles = StyleSheet.create ({ 

    model : {
        backgroundColor: white,
        height : 20

    }
    

})