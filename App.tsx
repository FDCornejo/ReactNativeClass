import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Hello as Helloapp } from './Views/hello';

const MainNavigator = createStackNavigator({
  Home: {screen: Helloapp},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);
