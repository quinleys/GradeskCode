import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView } from 'react-native'
import DatePicker from 'react-native-datepicker'

import { Header, Container, Content, Item, Input, Button, List, ListItem} from 'native-base'
import * as firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons'
import TabIcon from '../components/TabIcon'
var data = []
var date = []
export class AgendaScreen extends Component {



    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})

        this.state = {
            listViewData: data,
            listViewDate: date,
            newContact: '',
            newDate: 'date'

        }
    }
    componentDidMount(){
        var that = this
        firebase.database().ref('/agenda').on('child_added',function(data, date){
            var newData = [...that.state.listViewData]
            var newDate = [...that.state.listViewDate]

            newData.push(data)
            newDate.push(date)

            that.setState({listViewData : newData})
            that.setState({listViewDate : newDate})
    
        })
    }

    addRow(data , date){

        var key = firebase.database().ref('/agenda').push().key
        firebase.database().ref('/agenda').child(key).set({ name : data , date : date})

   }
    async deleteRow(secId, rowId, rowMap, data){
        await firebase.database().ref('agenda/' + data.key).set(null)

        rowMap[`${secId}${rowId}`].props.closeRow();
        var newData = [...this.state.listViewData];
        newData.splice(rowId, 1)
        this.setState({listViewData: newData });
    }
    showInformation(){

    }



  render() {
    return (
      <Container style={styles.container}>
      <Header>
        <Content>
            <Item>
        <Input
            placeholder='Add name'
            autoCorrect= {false}
            onChangeText = {(newContact) => this.setState({newContact})}
            />
            <DatePicker
            format="DD-MM-YYYY"
            date={this.state.date}
            onDateChange = {(newDate) => this.setState({newDate})}
            confirmBtnText = 'Add'
            cancelBtnText = 'Cancel'
            customStyles={{
                dateIcon: {
                display : 'none',
                }
            }}
            ></DatePicker>
           
            
            <Button onPress={()=> this.addRow(this.state.newContact,this.state.newDate)}
            style={styles.button}
            >
                <TabIcon 
                iconDefault='ios-add-circle'
                tintColor='#00aeef'
                />   
            </Button>
            
            </Item>
            </Content>
            </Header>
            <Content style={styles.container}>
            <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data=>
            <View style={styles.card}>
                <Text style={styles.text}>{data.val().name}</Text>
                <Text style={styles.text}>{data.val().date}</Text>
            </View>
            }

            renderRightHiddenRow={ (data, secId, rowId, rowMap )=> 
                <Button full danger onPress={() => this.deleteRow(secId,rowId, rowMap,data)}>
                    <TabIcon iconDefault='ios-trash' tintColor='#eee'/>
                </Button>
                }
                rightOpenValue={-90}
            />

            </Content>
            </Container>
    )
  }
}

export default AgendaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#F8F8F8',

    }, text: {
        color: '#eee',
        fontWeight : '700',
        fontSize: 30,
        textAlign: 'left',

    }, button: {

    },card: {
        flex: 1,
        margin : 10,
        backgroundColor: '#00aeef',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
        height: 100,
        borderRadius: 4,
        padding : 20
        

    }, button : {
        backgroundColor : '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        margin : 10,
    }
});