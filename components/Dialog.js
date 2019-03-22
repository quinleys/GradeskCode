import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native'

import * as firebase from 'firebase'
import { DB_CONFIG } from './Config'

class Dialog extends Component {

    render() {
        return (
            <View style={styles.container}>
                    <Button
                        title="Show Dialog"
                        onPress={() => {
                        this.setState({ visible: true });
                        }}
                    />
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                        this.setState({ visible: false });
                        }}
                        footer={
                            <DialogFooter>
                              <DialogButton
                                text="CANCEL"
                                onPress={() => {}}
                              />
                              <DialogButton
                                text="Yes"
                                onPress={() => {}}
                              />
                            </DialogFooter>
                          }
                        >
                        
                        <DialogContent>
                            Are you sure?
                        </DialogContent>
                    </Dialog>
                    </View>
        );
    }

}
export default Dialog;
