import React from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Sleep Diary'
  };

  render() {
    return (
      <View>
        <Text>Home!</Text>
      </View>
    );
  }
}