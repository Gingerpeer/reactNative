import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [showData,setShowData] = useState(false)
  const clickHandler = () => {
    if(age === 0){
      return
    }else{
      setShowData(true)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Please enter your name</Text>
        <TextInput 
          placeholder='eg. John Smith...'
          style={styles.inputField} 
          onChangeText={(val)=>setName(val)}
          />
          <Text>Please enter your age</Text>
          <TextInput 
            keyboardType='numeric'
            placeholder='eg. 22...'
            style={styles.inputField} 
            onChangeText={(val)=>setAge(val)}
            />
      </View>
      {showData && <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World my name is {name} and my age is {age}</Text>
      </View>}
      
      <View style={styles.buttonContainer}>
        <Button title='See Alias' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 header: {},
 body: {},
 boldText: {
  fontWeight: 'bold',
  maxWidth: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
 },
 form: {},
 inputField: {
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  margin: 10,
  width: 200,
 },
 buttonContainer: {},
});
