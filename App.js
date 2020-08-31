import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import MainPage from './Views/Login Screens/mainpage';
import SignIn from './Views/Login Screens/Signin'
import splash from './Views/Splashscreen'
import SignUp from './Views/Login Screens/Signup'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={splash} options={{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="SigninPage" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignupPage" component={SignUp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
