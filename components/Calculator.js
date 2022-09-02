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
    console.log('Clicked')
  }
  useEffect(()=>{
    calculateCalorie()
  },[kj,calorie])
  return(
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
        <Text style={styles.boldText}>{calorie}</Text>
          <Text style={styles.boldTextL}>Calories</Text>
          <Text style={styles.boldText}>in</Text>
          <Text style={styles.boldTextL}>{kj} Kj</Text>
        </View>
      }
        
        <TouchableOpacity style={styles.buttonContainer} onPress={clickHandler}>
          <Text style={styles.buttonContainerText}>Convert</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = new StyleSheet.create({
 container: {
  marginTop: 15,
  backgroundColor: '#FF006E',
  padding: 25,
  borderRadius: 8
 },
 boldText: {
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  fontSize: '19'
 },
 boldTextL: {
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  fontSize: '21'
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
 },
 buttonContainer: {
  backgroundColor: '#3a86ff',
  padding: 8,
  borderRadius: 5,
  marginTop: 12,
  marginBottom: 20,
 },
 buttonContainerText: {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 18
 },
 shadowProp: {
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
})
export default Calculator