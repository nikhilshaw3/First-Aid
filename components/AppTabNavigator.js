import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import {Icon} from 'react-native-elements';

export const AppTabNavigator = createBottomTabNavigator({
  FirstAidScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Icon name="home" type ="fontawesome5" />,
      tabBarLabel : "FirstAidScreen",
    }
  },
 
});