import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

export class Timepicker extends Component {
  render() {
    return (
      <View>
        <DatePicker
              style={{width: 200}}
              date={this.state.time}
              mode="time"
              format="HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              minuteInterval={10}
              onDateChange={(time) => {this.setState({time: time});}}
            />
      </View>
    )
  }
}

export default Timepicker
