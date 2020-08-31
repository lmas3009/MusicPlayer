import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import Applogo from '../../assets/applogo.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {FontAwesome} from '@expo/vector-icons'

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.applogo} source={Applogo}/>
        <Text style={styles.subtitle}>Lets Enjoy the day with Music</Text>
        <View style={styles.loginbtns}>
            <TouchableOpacity>
                <View style={styles.googlesign}>
                    <FontAwesome name="google" size={20} />
                    <View style={{marginLeft: 20}}/>
                    <Text style={styles.text1}>Sign In using Google</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.phonesign}>
                    <FontAwesome name="phone" size={20} color='white'/>
                    <View style={{marginLeft: 20}}/>
                    <Text style={styles.text}>Sign In using Phone</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SigninPage')}>
                <View style={styles.emailsign}>
                    <FontAwesome name="envelope" size={20} color='white'/>
                    <View style={{marginLeft: 20}}/>
                    <Text style={styles.text}>Sign In using Email</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    applogo:{
        height: 120,
        width: 120,
        borderRadius: 20,
        marginTop: 50
    },
    subtitle:{
        color:'white',
        fontSize: 25,
        marginRight: 30,
        marginLeft: 30,
        textAlign:'center',
        marginTop: 50,
    },
    loginbtns:{
        marginTop: 100
    },
    text:{
        fontSize: 15,
        fontWeight:'bold',
        color:'white'
    },
    text1:{
        fontSize: 15,
        fontWeight:'bold',
    },
    googlesign:{
        height: 50,
        width: 250,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
    },
    phonesign:{
        marginTop: 20,
        height: 50,
        width: 250,
        backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
    },
    emailsign:{
        marginTop: 20,
        height: 50,
        width: 250,
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
    },
})