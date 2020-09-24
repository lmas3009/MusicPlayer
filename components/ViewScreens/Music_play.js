import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image,Text,Button ,ImageBackground} from 'react-native'
import { Ionicons,FontAwesome,MaterialCommunityIcons,Feather } from  '@expo/vector-icons'
import {Avatar, Icon} from 'react-native-elements'
import { Audio } from 'expo-av'


export default class MusicPlayer extends React.Component {

    constructor(props) {  
        super(props);  
        this.state={
          artwork: 'https://forum.byjus.com/wp-content/themes/qaengine/img/default-thumbnail.jpg',
          ver: true,
          like:false
        }
    }  
    
 
 async componentDidMount(){
    const data = this.props.route.params.url;
    const artwork = this.props.route.params.artwork;
   Audio.setAudioModeAsync({
     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
     shouldDuckAndroid: true,
     staysActiveInBackground: true,
     playThroughEarpieceAndroid: false
   })
   this.Sound = new Audio.Sound();
   

   const status ={
      shouldPlay: false
   }
   
   this.setState({
     artwork: artwork
   })
   const source = {
    uri: `${data}`
  }
   
   this.Sound.loadAsync(source,status,false)
   
   this.Sound.stopAsync()
   
 }



  playSOund(){
    this.Sound.playAsync()
    this.setState(
      { ver:false }
  )
  }
  stopSound(){
    this.Sound.stopAsync()
    this.setState(
      { ver:true }
  )
  }
  pauseSound(){
    this.Sound.pauseAsync()
    this.setState(
      { ver:true }
  )
  }
  render() {
    var data=[];
        if(this.state.ver===true){
            data.push(
              //<View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                <Feather name="play" onPress={this.playSOund.bind(this) } style={{marginLeft:3}} color="black" size={35}/>
              //</View>
            )
        }
        else{
            data.push(
              //<View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                <Feather name="pause" onPress={this.pauseSound.bind(this)} color='black' size={35} />
              //</View>
            )
        }

  return (
    <View style={styles.container}>
      <ImageBackground
      style={{height: '60%',width: '100%',borderBottomLeftRadius:100,borderBottomRightRadius:100}}
        source={{
          uri:
            this.state.artwork,
        }}
        resizeMode="stretch"
        blurRadius={3}
      >
      <View style={styles.container1}>
      <View style={{marginTop: "80%"}}/> 
      <Image
                style={{height: 200,width: 250,borderRadius: 10,resizeMode:'stretch'}}
                  source={{
                    uri:
                      this.state.artwork,
                  }}
                />  
                <View style={{flexDirection:'row'}}>
                  {!this.state.like 
                  ? 
                  <MaterialCommunityIcons name="heart-outline" onPress={()=>this.setState({like:true})} size={30} color="black" /> 
                  :
                  <MaterialCommunityIcons name="heart" size={30} color="red" onPress={()=>this.setState({like:false})} />
                  }
                </View>
      <View style={{marginTop: 50}}/> 
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="step-backward" size={35}  color="black" />
        </View>
        <View style={{marginLeft: 80}}/> 
        {data}
        <View style={{marginLeft: 80}}/>
          <View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="step-forward" size={35} color="black" />
          </View>
      </View>
      <View style={{marginTop: 50}}/> 
      <Button
      title="Stop"
      onPress={this.stopSound.bind(this)}
      />
                    
       {/*
      <Button
      title="Play"
      onPress={this.playSOund.bind(this)}
      />
      <Button
      title="Pause"
      onPress={this.pauseSound.bind(this)}
       />*/}
     
      </View>

      </ImageBackground>
      {/*<Image
        style={{height: 200,width: 250,borderRadius: 10,resizeMode:'stretch'}}
          source={{
            uri:
              this.state.artwork,
          }}
        />  
      <View style={{marginTop: 50}}/> 
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="step-backward" size={35}  color="black" />
        </View>
        <View style={{marginLeft: 80}}/> 
        {data}
        <View style={{marginLeft: 80}}/>
          <View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="step-forward" size={35} color="black" />
          </View>
      </View>
      <View style={{marginTop: 50}}/> 

                    
       {/*
      <Button
      title="Play"
      onPress={this.playSOund.bind(this)}
      />
      <Button
      title="Pause"
      onPress={this.pauseSound.bind(this)}
       />
      <Button
      title="Stop"
      onPress={this.stopSound.bind(this)}
      />*/}
    </View>
  )
}
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    container1: {
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
  })