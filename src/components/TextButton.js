import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class TextButton extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        minWidth: 64,
        height: 36,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'flex-start'
      },
      text: {
        marginLeft: 8,
        marginRight: 8,
        fontSize: 14,
        color: this.props.textColor
      }
    });

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor={this.props.underlayColor} style={styles.container}>
        <View>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}