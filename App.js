import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// aftera
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  componentDidMount() {  // rendering이 모두 준비 되었을 때.
    fetch('https://raw.githubusercontent.com/example0312/weather-crawler/master/availableCityNames')
      .then(response => response.json())
      .then(cities => {
        console.log('cities =', cities.length);
        this.setState({
          cities
        });
      });
  }

  renderItem(city) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{city}</Text>
      </View>
    );
  }

  render() {  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.container}
          keyExtractor={(item) => item}
          renderItem={({ item }) => this.renderItem(item)}
          data={this.state.cities}
        />
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