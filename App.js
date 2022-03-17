import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,prompt,Image } from 'react-native';

export default function App() {
  
  return (
 
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('./assets/AEPS-Logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('./assets/aadhar.png')}
      />
   
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
  Logo: {
    bottom:50,
    width: 261,
    height: 94,
  },
  
  tinyLogo: {
    width: 153,
    height: 133,
    top:50,
  },
});
