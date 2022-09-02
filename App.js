import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// components
import Header from './components/Header';
import Calculator from './components/Calculator';
// TouchableOpacity is better than a Button for styling as Buttons cannot be styled
export default function App() {

  return (
    <View style={styles.container}>
      
        <Header />
        
        <Calculator />
        
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8338ec',
    alignItems: 'center',
    // justifyContent: 'center',
  },
   scrollView: {
    marginTop: 75,
    flex: 1,
    backgroundColor: '#000',
    width: 350,
    borderRadius: 5,
    padding: 10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
