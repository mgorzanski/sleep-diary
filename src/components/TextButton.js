import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class TextButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="#3161a3" style={styles.container}>
        <View>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: 64,
    height: 36,
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  text: {
    marginLeft: 8,
    marginRight: 8,
    fontSize: 14,
    color: '#000',
    color: '#13abc4',
  }
});