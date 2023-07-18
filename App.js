import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';


const App: () => Node = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [display,setDisplay]=useState(false);

  const resetFormData=()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }
  
  
  return (
    <View>
       <Text>Hi I am Abhay</Text>
       <TextInput
         style={styles.TextInput} 
         placeholder='Enter User Name'
         onChangeText={(text)=>setName(text)}
         value={name}
       />
       <TextInput
         style={styles.TextInput} 
         placeholder='Enter Email'
         onChangeText={(text)=>setEmail(text)}
         value={email}
       />
       <TextInput
         style={styles.TextInput} 
         placeholder='Enter Password'
         secureTextEntry={true}
         onChangeText={(text)=>setPassword(text)}
         value={password}
       />
      
      <View style={{marginBottom:10}}>
        <Button color={"green"} title='Print Value' onPress={()=>setDisplay(true)}/>
      </View>
       
       <Button title='Clear Details'onPress={resetFormData}/>
       <View>
        {
         display ?
          <View>
            <Text style={{fontSize:15}}>User Name is: {name}</Text>
            <Text style={{fontSize:15}}>User Email is: {email}</Text>
            <Text style={{fontSize:15}}>User Password is: {password}</Text>
          </View>
          :null
        }
       </View>

    </View>
  );
};


const styles=StyleSheet.create({
  TextInput:{
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin:10
  }
})

export default App;
