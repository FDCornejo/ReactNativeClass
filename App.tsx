import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationActions } from 'react-navigation';
import { expression } from '@babel/template';
import HomeScreen from './Views/HomeScreen'
import Profile from './Views/ProfileScreen'

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigation = createStackNavigator({
  Home: HomeScreen,
  Profile: Profile
}, {
  defaultNavigationOptions: {
    title: 'Le Twitter Peubelle',
    headerStyle: {
      backgroundColor: '#403D58',
    },
    headerTintColor: '#F2EFEA',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})
const AppContainer = createAppContainer(AppNavigation);
