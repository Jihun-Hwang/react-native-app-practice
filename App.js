import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0,
  };

  render(){
    const {
      container
    } = styles;

    const clickHandler = () => {
      this.state.counter++;
      console.log(this.state.counter);
    };

    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button 
          title={"Click me!"} 
          onPress={clickHandler} />
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
