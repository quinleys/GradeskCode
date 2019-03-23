import React from 'react'
import { StyleSheet, TextInput } from 'react-native'


const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    fontWeight: '500'
  },
})

const InputAgenda = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Type here to add note."
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
)

export default InputAgenda