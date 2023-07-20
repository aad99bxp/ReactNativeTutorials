import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';




const App=()=> {
const users=[
  {
    id:1,
    name:"Anil"
  },
  {
    id:2,
    name:"Sam"
  },
  {
    id:3,
    name:"Peter"
  },
  {
    id:4,
    name:"Bruce"
  },
  {
    id:5,
    name:"Bruce5"
  },
  {
    id:6,
    name:"Bruce6"
  },
  {
    id:7,
    name:"Bruce7"
  },
  {
    id:8,
    name:"Bruce8"
  },
  {
    id:9,
    name:"Bruce9"
  },
  {
    id:10,
    name:"Bruce10"
  }
]
  return (
    <View>
      <Text style={{fontSize: 31}}>List With Map Function </Text>
      <ScrollView style={{marginBottom: 50}}>
      {
        users.map((item)=><Text style={styles.item}>{item.name}</Text>)
      }
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize: 24,
    padding:10,
    color:"#fff",
    backgroundColor:'blue',
    borderColor:"black",
    borderWidth:1,
    margin:10
  }
});

export default App;
