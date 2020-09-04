import React, { Component } from 'react'
import { Text, View ,StyleSheet,ScrollView} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'


class Account extends Component {

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
      <View style={{backgroundColor:this.state.bdcolor,flex:1}}>
      <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={{color:'white',fontSize: 30,fontWeight:'bold'}}>A</Text>
          </View>
          <Text style={styles.username}>Admin</Text>
          </View>
          <View style={styles.icon}>
              <FontAwesome name="edit" color="white" size={30}/>
          </View>
        </View>
        <View style={styles.settings}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.settinginfo}>Notifications</Text>
            <Text style={styles.settinginfo}>Switch</Text>
          </View>
          <View style={styles.divider}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.settinginfo}>Updates</Text>
            <Text style={styles.settinginfo}>Switch</Text>
          </View>
          <View style={styles.divider}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.settinginfo}>Notifications</Text>
            <Text style={styles.settinginfo}>Switch</Text>
          </View>
          <View style={styles.divider}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.settinginfo}>Notifications</Text>
            <Text style={styles.settinginfo}>Switch</Text>
          </View>
          <View style={styles.divider}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.settinginfo}>Notifications</Text>
            <Text style={styles.settinginfo}>Switch</Text>
          </View>
          <View style={styles.divider}/>
        </View>
        <View style={{alignItems:'center'}}>
          <View style={styles.plan}>
            <Text style={styles.plan_title}>Free Music</Text>
            <Text style={styles.plan_sub}>CURRENT PLAN</Text>
          </View>
        </View>
      </ScrollView>
      </View>
    )
  }
}

export default Account

const styles = StyleSheet.create({
  profile:{
    marginTop: 50,
    height: 100,
    width: 200,
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection:'row'
  },
  avatar:{
    height: 50,
    width: 50,
    backgroundColor:'black',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },  
  username:{
    fontSize: 20,
    fontWeight:'bold',
  },
  settings:{
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  settinginfo:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },  
  divider:{
    marginTop: 10,
    marginBottom: 30,
    height: 1,
    backgroundColor:'grey'
  },
  plan:{
    marginTop: 40,
    marginBottom: 40,
    height: 70,
    width: 300,
    backgroundColor:'green',
    borderRadius: 10,
    alignItems:'center',
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },
  plan_title:{
    color:'white',
    fontSize: 24,
    fontWeight:'bold'
  },
  plan_sub:{
    color:'white',
    fontSize: 12,
    fontWeight:'bold'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    marginRight: 30,
    marginTop: 50
  }
})