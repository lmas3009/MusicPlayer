import React, { Component } from 'react';
import { View, Text ,Button,Image,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Applogo from '../../assets/applogo.png'


export default class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.applogo} source={Applogo}/>
        <Text style={styles.subtitle}>Sign In using Email</Text>
        <View style={styles.inputs}>
            <View style={styles.textinput1}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email Id..."
                    placeholderTextColor="grey"
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    />
            </View>
            <View style={styles.textinput2}>
                <TextInput 
                    style={styles.input}
                    placeholder="Password..."
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                    />
            </View>
        </View>
        <View style={{marginTop: 50}}>
        <TouchableOpacity onPress={()=>false}>
                <View style={styles.loginbtn}>
                    <Text style={styles.text}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 30,flexDirection:'row'}}>
            <Text style={{color:'white',fontSize: 15}}>Don't have an Acoount? </Text>
            <Text onPress={()=>this.props.navigation.navigate("SignupPage")} style={{color:'white',fontSize: 15}}>Sign Up</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        alignItems:'center'
    },
    applogo:{
        height: 120,
        width: 120,
        borderRadius: 20,
        marginTop: 50
    },
    subtitle:{
        color:'white',
        fontSize: 20,
        marginRight: 30,
        marginLeft: 30,
        textAlign:'center',
        marginTop: 50,
    },
    inputs:{
        marginTop: 50,
    },  
    textinput1:{
        height: 50,
        width: 250,
        backgroundColor:'white',
        borderRadius:10
    },
    textinput2:{
        marginTop: 20,
        height: 50,
        width: 250,
        backgroundColor:'white',
        borderRadius:10
    },
    input:{
        color:'black',
        height: 50,
        width: 250,
        fontSize: 15,
        borderRadius: 50, 
        padding:'offset' ,
        borderColor:'white'
    },
    loginbtn:{
        height: 50,
        width: 150,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
    },
    text:{
        fontSize: 15,
        fontWeight:'bold',
    }
})


