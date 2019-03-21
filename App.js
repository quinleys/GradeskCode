import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'
import TabIcon from './components/TabIcon'

import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import AgendaScreen from './screens/AgendaScreen'
import StatsScreen from './screens/StatsScreen'




const AuthStackNavigator = createStackNavigator({
  Welcome: {
    // hide menu op start scherm
    screen : WelcomeScreen, 
  navigationOptions: ({ navigation }) => ({
    header: null,
    })
  },

  SignIn: SignInScreen,
  SignUp: SignUpScreen
})


const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      //tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabIcon
            iconDefault='ios-home'
            iconFocused='ios-home'
            focused={focused}
            tintColor={tintColor}
            />
      )
    }    

  },

  Agenda: {
    screen: AgendaScreen,
    navigationOptions: {
      // tabBarLabel: 'Statistics',

      tabBarIcon: ({ focused, tintColor }) => (
        <TabIcon
            iconDefault='ios-calendar'
            iconFocused='ios-calendar'
            focused={focused}
            tintColor={tintColor}
        />
    )

    }

  },
  Statistics: {
    screen: StatsScreen,
    navigationOptions: {
      // tabBarLabel: 'Statistics',
 
      tabBarIcon: ({ focused, tintColor }) => (
        <TabIcon
            iconDefault='ios-stats'
            iconFocused='ios-stats'
            focused={focused}
            tintColor={tintColor}
        />
      )
      }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      // tabBarLabel: 'User',

      tabBarIcon: ({ focused, tintColor }) => (
        <TabIcon
            iconDefault='ios-contact'
            iconFocused='ios-contact'
            focused={focused}
            tintColor={tintColor}
        />
      )
    }
  },
},
  {
    tabBarOptions: {
        activeTintColor: '#00aeef',
        inactiveTintColor: '#000000',
        showLabel: false 
        
    },

});


const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      // toon hamburger menu niet
      
      header: null,
      title: 'Your App',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      ),
      
    })
  }
})


AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];

  //let headerTitle = routeName;

  return {
   // headerTitle,
  };
};


const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  Statistics : StatsScreen,
  Agenda : AgendaScreen,
  Settings : SettingsScreen
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});