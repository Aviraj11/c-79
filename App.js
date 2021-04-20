import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen'
import HomeScreen from "./screens/HomeScreen"
import ExchangeScreen from "./screens/ExchangeScreen"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render() {
  return (
    <View>
    <SignupLoginScreen/>
    </View>
  );
  }
}

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: HomeScreen,
  ExchangeScreen: ExchangeScreen
})

const AppContainer =  createAppContainer(AppTabNavigator);
