import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
    </View>
  );
}

  