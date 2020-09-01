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
import Bottomnav from './components/MainScreens/Bottomtabbar'




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
