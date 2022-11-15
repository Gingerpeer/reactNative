import { StyleSheet,View,Text } from "react-native"

const Header = () => {
  return(
    <View style={styles.titleView}>
      <View style={styles.titleViewSpacing}>
        <Text style={styles.titleText}>KJ to Calorie</Text>
        <Text style={styles.titleText}>Converter</Text>
      </View>
      <View style={styles.divLine}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: 0,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 0,
    width: "100%"
  },
  titleViewSpacing: {
    marginTop: 60,
    paddingBottom: 20
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  divLine: {
    backgroundColor: 'cyan',
    minHeight: 10,
    borderRadius: 50
    
  }
})
export default Header