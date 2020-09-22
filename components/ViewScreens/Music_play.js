import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image,Text,Button } from 'react-native'
import { Ionicons,FontAwesome,MaterialCommunityIcons } from  '@expo/vector-icons'
import {Avatar, Icon} from 'react-native-elements'
import { Audio } from 'expo-av'


export default class MusicPlayer extends React.Component {

    constructor(props) {  
        super(props);  
        this.state={
          artwork: 'https://forum.byjus.com/wp-content/themes/qaengine/img/default-thumbnail.jpg',
          ver: true
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
              <Ionicons name="md-play-circle" onPress={this.playSOund.bind(this) } color='black' size={50} />
            )
        }
        else{
            data.push(
              <MaterialCommunityIcons name="pause-circle" onPress={this.pauseSound.bind(this)} color='black' size={50} />
            )
        }

  return (
    <View style={styles.container}>
      <Avatar
        size={200}
        rounded
        avatarStyle = {{resizeMode: 'stretch',}}
        source={{
          uri:
            this.state.artwork,
        }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <View style={{marginTop: 50}}/> 
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <FontAwesome name="step-backward" color='black' size={40} /> 
        <View style={{marginLeft: 80}}/> 
        {data}
        <View style={{marginLeft: 80}}/>
        <FontAwesome name="step-forward" color='black' size={40} /> 
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
       />*/}
      <Button
      title="Stop"
      onPress={this.stopSound.bind(this)}
      />
    </View>
  )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  })