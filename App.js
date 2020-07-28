import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  render(){

    return (  // handler는 항상 함수로 처리함
      <View style={styles.container}>
        <Text style={[styles.textBig, styles.textRed]}>react native 연습!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

// StyleSheet는 css와 유사함. 자바스크립트 컨트롤
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBig: {
    fontSize: 32,
  },
  textRed: {
    color: 'red',
  },

});
