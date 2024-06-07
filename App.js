import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TEST TEST</Text>
      <Text>TEST TEST</Text>
      <Text>TEST TEST</Text>
      <Text>TEST TEST</Text>
      <Text>TEST TEST</Text>
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
});
