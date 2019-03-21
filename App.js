import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

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
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon name="ios-home" size={24} />
      )
    }
  },

  Agenda: {
    screen: AgendaScreen,
    navigationOptions: {
      tabBarLabel: 'Agenda',
      tabBarIcon: () => (
        <Icon name="ios-calendar" size={24} />
      )
    }

  },
  Statistics: {
    screen: StatsScreen,
    navigationOptions: {
      tabBarLabel: 'Statistics',
      tabBarIcon: () => (
        <Icon name="ios-stats" size={24} />
      )
    }

  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'User',
      tabBarIcon: () => (
        <Icon name="ios-contact" size={24} />
      )
    }
  },

})


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

  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;

  return {
    headerTitle,
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