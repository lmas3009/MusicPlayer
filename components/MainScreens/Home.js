import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:''
    }
  }

  render() {
    var date, hour
 
    date = new Date();
    hour = date.getHours(); 
    if(hour>=4 && hour<12){
      this.state.day = 'Morning',
      this.state.bdcolor = 'white',
      this.state.textcolor = "black"
    }
    else if(hour>=12 && hour<16){
      this.state.day = 'Afternoon',
      this.state.bdcolor = 'lightgrey',
      this.state.textcolor = "black"
    }
    else if(hour>=16 && hour<19){
      this.state.day = 'Evening',
      this.state.bdcolor = 'grey',
      this.state.textcolor = "white"
    }
    else{
      this.state.day = "Night",
      this.state.bdcolor = 'black',
      this.state.textcolor = "white"
    }

    return (
      <View style={[styles.container,{backgroundColor:this.state.bdcolor}]}>
        <View style={{marginTop: 40, marginLeft: 30, flexDirection:'row', alignItems:'center'}}>
          <Text style={[styles.text1,{color:this.state.textcolor}]}>Good </Text>
          <Text style={[styles.day,{color:this.state.textcolor}]}>{this.state.day} </Text>
        </View>
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  text1:{
    color:'white',
    fontSize: 20
  },
  day:{
    color:'white',
    fontSize: 25,
    fontWeight:'bold'
  }
})