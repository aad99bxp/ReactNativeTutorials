import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';




const App=()=> {

  return (
    <View>
      <Text style={{fontSize: 31}}>Grid With Dynamic Data</Text>
      <View style={{flex:1,flexDirection:'row', flexWrap:'wrap'}}>
      <Text style={styles.item}>Sam</Text>
      <Text style={styles.item}>Sam</Text>
      <Text style={styles.item}>Sam</Text>
      <Text style={styles.item}>Sam</Text>
      <Text style={styles.item}>Sam</Text>
      </View>
      
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
    margin:10,
    width: 120,
    height:120,
    textAlignVertical:'center',
    textAlign: 'center'
  }
});

export default App;
