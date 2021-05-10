import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import FirstAidScreen from '../screens/FirstAidScreen'

export const AppStackNavigator = createStackNavigator({
    FirstAidScreen : {
        screen : FirstAidScreen,
        navigationOptions:{
          headerShown : false
        }
      }
},
  {
    initialRouteName: 'FirstAidScreen'
  }
);
