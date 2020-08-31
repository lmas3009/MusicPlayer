import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import Logo1 from './assets/logo1.png'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import MainPage from './Views/Login Screens/mainpage';

 class splash extends React.Component {
   constructor(props){
     super(props);
   }
   render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainPage')}>
          <Image style={styles.logo} source={Logo1}/>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
   }
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={splash} options={{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 150,
    width: 150
  }
});


