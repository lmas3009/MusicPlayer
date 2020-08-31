import React, { Component } from 'react';
import { View, Text ,Button,Image,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Applogo from '../../assets/applogo.png'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Image style={styles.applogo} source={Applogo}/>
        <Text style={styles.subtitle}>Sign Up using Email</Text>
        <View style={styles.inputs}>
        <View style={styles.textinput1}>
                <TextInput 
                    style={styles.input}
                    placeholder="Username..."
                    placeholderTextColor="grey"
                    />
            </View>
            <View style={styles.textinput2}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email Id..."
                    placeholderTextColor="grey"
                    keyboardType='email-address'
                    />
            </View>
            <View style={styles.textinput3}>
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
                    <Text style={styles.text}>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 30,flexDirection:'row'}}>
            <Text style={{color:'white',fontSize: 15}}>Don't have an Acoount? </Text>
            <Text onPress={()=>this.props.navigation.pop()} style={{color:'white',fontSize: 15,marginBottom: 20}}>Sign In</Text>
        </View>
      </View>
      </ScrollView>
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
        marginTop: 30
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
        marginTop: 50
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
    textinput3:{
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


