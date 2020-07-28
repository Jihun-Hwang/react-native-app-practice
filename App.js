import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  return (  // handler는 항상 함수로 처리함
    <View style={styles.container}>
      <Button title={'click me!'} onPress={() => console.log('Clicked')} />
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet는 css와 유사함. 자바스크립트 컨트롤
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
