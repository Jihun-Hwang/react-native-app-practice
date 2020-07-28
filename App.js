import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class CounterButton extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    const clickHandler = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={clickHandler} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterButton />
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
});