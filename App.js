import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  PhoneInput from './b1'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Xin chào</Text>
      <StatusBar style="auto" />
      <PhoneInput /> 
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
});
