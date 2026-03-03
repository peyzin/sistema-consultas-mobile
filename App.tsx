import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Salve Fml</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41d0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold'
  }
});
