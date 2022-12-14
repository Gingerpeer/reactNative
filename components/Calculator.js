import { useEffect,useState } from "react"
import { View,Text,StyleSheet,TouchableOpacity, TextInput } from "react-native"

const Calculator = () => {
  const [kj,setKj] = useState(0)
  const [calorie,setCalorie] = useState(0)
  const [showData,setShowData] = useState(false)

  const calculateCalorie = () => {
    let calc = kj / 4.184
    parseFloat(calc)
    setCalorie(calc.toFixed(1))
  }
  const clickHandler = () =>{
    if(kj !== 0){
      setShowData(true)
      calculateCalorie()
    }
  }
  useEffect(()=>{
    calculateCalorie()
  },[kj,calorie])
  return(
    <View style={styles.alignMent}>
    <View style={styles.container}>
      <Text style={styles.boldText}>Please enter KJ Amount</Text> 
         <TextInput 
          placeholder='eg. 1233kj'
          style={styles.inputField} 
          onChangeText={(val)=>setKj(val)}
          keyboardType='number-pad'
  />

      {showData && 
        <View style={styles.header}>
        <Text style={styles.boldTextL}>Calories {calorie}</Text>
        </View>
        }
        </View>
       <TouchableOpacity style={styles.buttonContainer} onPress={clickHandler}>
          <Text style={styles.buttonContainerText}>Convert</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = new StyleSheet.create({
 container: {
  alignItems: 'center',
  marginTop: 0,
  backgroundColor: 'black',
  padding: 50,
  borderRadius: 0
 },
 boldText: {
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  fontSize: 19
 },
 boldTextL: {
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  fontSize: 21,
 },
 alignMent: {
  alignItems: 'center',
  // justifyContent: 'center',
  textAlign: 'center',
 },
 form: {},
 inputField: {
  borderWidth: 1,
  borderColor: '#fff',
  padding: 8,
  margin: 10,
  width: 200,
  borderRadius: 5,
  backgroundColor: '#fff',
  fontSize: 19,
  fontWeight: 'bold'
 },
 buttonContainer: {
  backgroundColor: '#f72585',
  padding: 15,
  borderRadius: 5,
  maxWidth: 150,
  marginTop: 0,
  marginBottom: 20,
 },
 buttonContainerText: {
  color: 'cyan',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 24
 },
 shadowProp: {
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
})
export default Calculator