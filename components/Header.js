import { StyleSheet,View,Text } from "react-native"

const Header = () => {
  return(
    <View style={styles.titleView}>
      <Text style={styles.titleText}>KJ to Calorie</Text>
      <Text style={styles.titleText}>Converter</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: 50,
    backgroundColor: '#3a86ff',
    padding: 10,
    borderRadius: 5,
    width: "100%"
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  }
})
export default Header