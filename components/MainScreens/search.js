import React, { Component } from 'react'
import { Text, View ,StyleSheet,ScrollView,TouchableOpacity,TextInput,FlatList} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:'',
      textcolor1:''
    }
    Song_type=[
      { name:"Pop",id:1,bg:'lightgreen' },
      { name:"Electronic",id:2,bg:'lightblue' },
      { name:"Bollywood",id:3,bg:'red' },
      { name:"Hip-Hop",id:4,bg:'orange' },
      { name:"Summer",id:5 ,bg:'pink'},
      { name:"Romance",id:6 ,bg:'lightpink'},
      { name:"Punjabi",id:7 ,bg:'purple'},
      { name:"Party" ,id:8 ,bg:'orange'},
      { name:"Tamil" ,id:9,bg:'darkorange'},
      { name:"Telugu" ,id:10,bg:'green'},
      { name:"Marathi" ,id:11,bg:'darkred'},
      { name:"Wellness" ,id:12,bg:'tomato'},
      { name:"Rock" ,id:13,bg:'red'},
      { name:"Mood" ,id:14,bg:'lightgrey'},
      { name:"Chill" ,id:15,bg:'lightblue'},
      { name:"Focus" ,id:16,bg:'lightpink'},
      { name:"Sleep" ,id:17,bg:'lightblue'},
      { name:"Soul" ,id:18,bg:'pink'},
      { name:"Gamming" ,id:19,bg:'powderblue'},
      { name:"Jazz" ,id:20,bg:'steelblue'},
    ]
  }

  render() {
    var date, hour
 
    date = new Date();
    hour = date.getHours(); 
    if(hour>=4 && hour<12){
      this.state.day = 'Morning',
      this.state.bdcolor = 'white',
      this.state.textcolor = "black",
      this.state.textcolor1 = "black"
    }
    else if(hour>=12 && hour<16){
      this.state.day = 'Afternoon',
      this.state.bdcolor = 'lightgrey',
      this.state.textcolor = "black",
      this.state.textcolor1 = "black"
    }
    else if(hour>=16 && hour<19){
      this.state.day = 'Evening',
      this.state.bdcolor = 'grey',
      this.state.textcolor = "white",
      this.state.textcolor1 = "white"
    }
    else{
      this.state.day = "Night",
      this.state.bdcolor = 'black',
      this.state.textcolor = "white",
      this.state.textcolor1 = "white"
    }

    return (
      <View style={{backgroundColor:this.state.bdcolor,flex:1}}>
        <View style={[styles.search,{backgroundColor:this.state.textcolor}]}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput 
              style={styles.input}
              placeholder="Search ..."
              placeholderTextColor={this.state.bdcolor}
              underlineColorAndroid='transparent'
            />
            <FontAwesome name="search" color={this.state.bdcolor} size={20}/>
          </View>
        </View>
        <View style={styles.allsong}>
          <Text style={[styles.allsong_title,{color:this.state.textcolor}]}>Browse all</Text>
          <View style={styles.song_type_list}>
          <FlatList
              numColumns = {2}
              keyExtractor = {(item) => item.id}
              data = {Song_type}
              renderItem = {({item}) => (
                <View style={[styles.card,{backgroundColor:item.bg}]}>
                  <Text style = {{color:'white',marginTop: 10,marginLeft: 10,fontSize: 15,fontWeight: 'bold'}} > {item.name} </Text>
                </View>
                )}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Search;

const styles = StyleSheet.create({
  search:{
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    marginTop: 50,
    borderRadius:10
  },
  input:{
    width: 250,
    fontSize: 20,
    marginRight: 10
  },
  allsong:{
    margin: 20
  },
  allsong_title:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight:'bold'
  },
  song_type_list:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
    marginBottom: 130
    
  },
  card:{
    height: 100,
    width: 150,
    backgroundColor:'white',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10
  }
})