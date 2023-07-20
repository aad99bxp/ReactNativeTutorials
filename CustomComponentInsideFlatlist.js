import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';




const App=()=> {

  const users=[
    {
      id:1,
      name:"Anil",
      email:"anil@gmail.com"
    },
    {
      id:2,
      name:"Sam",
      email:"sam@gmail.com"
    },
    {
      id:3,
      name:"Peter",
      email:"peter@gmail.com"
    },
    {
      id:4,
      name:"Bruce",
      email:"bruce@gmail.com"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 31}}>Component in Loop With FlatList</Text>
      <FlatList
      data={users}
      renderItem={({item})=><UserData item={item}/>}
      />
    </View>
    
  );
}; 

//New Custom Component
const UserData =(props)=>{
  const item=props.item;
  return(
    <View style={styles.box}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  item:{
    fontSize: 24,
    color: 'orange',
    flex:1,
    margin:2,
    textAlign:"left"
  },
  box:{
    flexDirection:'row',
    borderWidth: 2,
    borderColor:'orange',
    marginBottom:10
  }
});

export default App;
