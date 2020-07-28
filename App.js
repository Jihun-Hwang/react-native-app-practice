import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class CounterButton extends React.Component {
  static defaultProps = {   // counter를 set하지 않으면 -1로 설정
    counter: -1,
  };

  constructor(props){
    super(props);

    this.state = {   // React.Component에 state가 있음.
      counter: props.counter,
    };
  }

  render() {  // 변화가 생길 때마다 실행된다고 생각(하지만 반드시 리페인트를 의미하는 것은 아님)
    const clickHandler = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    return (
      <View style={styles.buttonContainer}>
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
        <CounterButton counter={0}/>
        <CounterButton />
        <CounterButton counter={100}/>
        <CounterButton counter={50}/>
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
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: 'blue',
  },
});