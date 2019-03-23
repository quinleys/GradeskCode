import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

export class Datespicker extends Component {
  render() {
    return (
      <View>
        <DatePicker
              style={{width: 200}}
              date={this.state.date}
              mode="date"
              placeholder="placeholder"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => {this.setState({date: date});}}
            />
      </View>
    )
  }
}

export default Datespicker
