import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, ScrollView, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// aftera
export default class App extends React.Component {
  render() {  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.text}>Apple</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Banana</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Cherries</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Damson plum</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>...</Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

// StyleSheet는 css와 유사함. 자바스크립트 컨트롤
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});