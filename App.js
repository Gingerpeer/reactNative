import React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl,SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
// TouchableOpacity is better than a Button for styling as Buttons cannot be styled
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function App() {
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [showData,setShowData] = useState(false)
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setName('')
    setAge(0)
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const clickHandler = () => {
    console.log('\nName: ',name,'\nAge: ',age)
    if(age !== 0 && name !== ''){
      setShowData(true)
    }
  }
  useEffect(()=>{
    if(age === 0){
      setShowData(false)
    }
  },[name,age])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
        >
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
      {showData && 
        <View style={styles.header}>
          <Text style={styles.boldText}>Hello, World my name is {name} and my age is {age}</Text>
        </View>
      }
        
        <TouchableOpacity style={styles.buttonContainer} onPress={clickHandler}>
         <Text style={styles.buttonContainerText}>See Alias</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   scrollView: {
    flex: 1,
    backgroundColor: 'pink',
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
 buttonContainer: {
  backgroundColor: 'grey',
  padding: 8,
  borderRadius: 5,
  marginTop: 12,
  marginBottom: 20,
 },
 buttonContainerText: {
  color: 'white'
 },
});
