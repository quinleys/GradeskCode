import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView , ScrollView, TouchableOpacity, Picker, PickerItem, ActivityIndicator} from 'react-native'
import DatePicker from 'react-native-datepicker'

import { Header, Container, Content, Item, Input, Button, List, ListItem} from 'native-base'
import * as firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons'
import TabIcon from '../components/TabIcon'


import ActionSheet from 'react-native-actionsheet'

var data = []
var date = []
var label = []
var color = []

export class AgendaScreen extends Component {



    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})

        
        this.labelData = ["Work","School","Sport","Personal", 'None']
        this.labelColor = ["#36B37E","#6554C0","#f06292","#FFAB00", '#00aeef']

        this.state = {
            listViewData: data,
            listViewDate: date,
            listViewLabel : label,
            listViewColor : color,
            newContact: '',
            newDate: '',
            newLabel: 'Label',
            selectedValue: null,
            colorLabel:'',
            color: '#00aeef'
            
            

        }

    }
    componentDidMount(){
        var that = this
        firebase.database().ref('/agenda').on('child_added',function(data, date, label, color){

            var newData = [...that.state.listViewData]
            var newDate = [...that.state.listViewDate]
            var newLabel = [...that.state.listViewLabel]
            var newColor = [...that.state.listViewColor]

            newData.push(data)
            newDate.push(date)
            newLabel.push(label)
            newColor.push(color)

            that.setState({listViewData : newData})
            that.setState({listViewDate : newDate})
            that.setState({listViewLabel : newLabel})
            that.setState({listViewColor : newColor})
    
        })
    }
    showActionSheet = () => {
        this.ActionSheet.show()
      }

    addRow(data , date , label, color){

        var key = firebase.database().ref('/agenda').push().key
        firebase.database().ref('/agenda').child(key).set({ name : data , date : date , label : label , color : color })
        console.log(label)

   }
    async deleteRow(secId, rowId, rowMap, data){
        await firebase.database().ref('agenda/' + data.key).set(null)

        rowMap[`${secId}${rowId}`].props.closeRow();
        var newData = [...this.state.listViewData];
        newData.splice(rowId, 1)
        this.setState({listViewData: newData });
    }

  render() {
  

    return (
        
            <View style={styles.container}>
                <Text style={styles.title}>Agenda</Text>
            <View style={styles.inputfield}>
            <Input
            placeholder='Add name'
            autoCorrect= {false}
            onChangeText = {(newContact) => this.setState({newContact})}
            />
            <View style={{padding : 10}}>
            <DatePicker
            format="DD-MM-YYYY"
            date={this.state.newDate}
            onDateChange = {(newDate) => this.setState({newDate})}
            confirmBtnText = 'Add'
            cancelBtnText = 'Cancel'
            customStyles={{
                dateIcon: {
                display : 'none',
                
                }
            }} 
            />
            </View>
            <Button onPress={()=> this.addRow(this.state.newContact,this.state.newDate, this.state.newLabel, this.state.newColor)}
            style={styles.button}
            >
                <TabIcon 
                iconDefault='ios-add-circle'
                tintColor='#00aeef'
                size = {30}
                />   
            </Button>
            </View>

            <View style={styles.labelContainer}>
            <Text>Choose your label: </Text>
                <Button style={{backgroundColor : this.state.color, padding : 10}} onPress={this.showActionSheet}>
                    <Text style={{ color : '#eee' }} >{this.state.newLabel}</Text>
                </Button>
            <ActionSheet
                ref={o => this.ActionSheet = o}
                title={'Choose your label :'}
                options={['Work', 'School', 'Sport', 'Personal', 'None', 'cancel']}
                selectedValue={this.state.newLabel}
                cancelButtonIndex={5}
                destructiveButtonIndex={4}
                onPress={(newLabel) => ( this.setState({newLabel : this.labelData[newLabel]}), this.setState({newColor : this.labelColor[newLabel]}),console.log(this.labelData[newLabel]), this.setState({color : this.labelColor[newLabel]}) )}
            />
            
            </View>

            <ScrollView>
            <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data=>
            <View style={{
                backgroundColor : data.val().color ,
                marginVertical: 5,
                shadowColor: "#000",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,  
                height: 'auto',
                borderRadius: 4,
                padding: 10,
                }} >
                <Text style={styles.text}>{data.val().name}</Text>
                <Text style={styles.textSmall}>{data.val().label}</Text>
                <Text style={styles.text}>{data.val().date}</Text>
                
            </View>
            }

            renderRightHiddenRow={ (data, secId, rowId, rowMap )=> 
                <Button style={styles.card} full danger onPress={() => this.deleteRow(secId,rowId, rowMap,data)}>
                    <TabIcon iconDefault='ios-trash' tintColor='#eee'/>
                </Button>
                }
                rightOpenValue={-90}
            />
            </ScrollView>
            
        </View>
            
    )
  }
}

export default AgendaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#F8F8F8',
        padding: 20,
        paddingTop: 50,
        paddingBottom: 0

    }, text: {
        color: '#eee',
        fontWeight : '700',
        fontSize: 30,
        textAlign: 'left',

    }, button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },card: {

        marginVertical: 5,
        backgroundColor: '#FF5630',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
        height: 'auto',
        borderRadius: 4,



    }, button : {
        backgroundColor : '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        margin : 10,
    }, title : {
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
        

    }, inputfield : {
        flexDirection: 'row',
        color: '#eee',
        height : 'auto',
    },
    picker:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        overflow : 'hidden',
        height: 50
    }, label: {
        flexDirection : 'row',
        fontWeight : '700',
        fontSize: 30,
    }, labelButton : {
        backgroundColor : '#172B4D'
    }, labelContainer : {
        flexDirection : 'row',
        padding : 10
    }, textSmall : {
        color: '#eee',
        fontWeight : '100',
        fontSize: 20,
        textAlign: 'left',
    }
});