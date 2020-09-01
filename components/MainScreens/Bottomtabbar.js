import React, { Component } from 'react'
import { Text, View ,Button, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Home from './Home'

const Tab  = createBottomTabNavigator();

 function Bottomnav(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" components={Home}/>
                <Tab.Screen name="Home" components={Home}/>
                <Tab.Screen name="Home" components={Home}/>
                <Tab.Screen name="Home" components={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Bottomnav;