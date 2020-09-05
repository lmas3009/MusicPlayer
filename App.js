import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import MainPage from './components/Login Screens/mainpage'
import SignIn from './components/Login Screens/Signin'
import 'react-native-gesture-handler';
import SignUp from './components/Login Screens/Signup'
import Next1 from './components/Login Screens/nextbtn'
import Home from './components/MainScreens/Home'
import Search from './components/MainScreens/search'
import Library from './components/MainScreens/library'
import Account from './components/MainScreens/account'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons'


const Tab  = createBottomTabNavigator();

function Bottomnav(){
    return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={23} />
          ),
        }}
/>
          <Tab.Screen name="Search" component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={20} />
          ),
        }}

/>
          <Tab.Screen name="Library" component={Library} options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-list" color={color} size={23} />
          ),
        }}
/>
          <Tab.Screen name="Account" component={Account} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={23} />
          ),
        }}
/>
      </Tab.Navigator>
    );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="Sigin" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="Sigup" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Next" component={Next1} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Bottomnav" component={Bottomnav} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
