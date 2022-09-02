import { StyleSheet,View,Text } from "react-native"

const Header = () => {
  return(
    <View style={styles.titleView}>
      <View style={styles.titleViewSpacing}>
        <Text style={styles.titleText}>KJ to Calorie</Text>
        <Text style={styles.titleText}>Converter</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: 0,
    backgroundColor: '#3a86ff',
    padding: 10,
    borderRadius: 0,
    width: "100%"
  },
  titleViewSpacing: {
    marginTop: 50,
    paddingBottom: 30
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  }
})
export default Header