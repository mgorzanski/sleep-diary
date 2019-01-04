import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { material, robotoWeights, materialColors } from 'react-native-typography';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as colors from './../../styles/colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Sleep Diary',
    headerStyle: {
      backgroundColor: colors.headerBarBackgroundColor
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.history}>
          <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={25} />
          <Text style={styles.historyText}>History</Text>
          <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={25} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.containerBackgroundColor,
    flex: 1
  },
  history: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1
  },
  historyText: {
    ...material.titleObject,
    ...robotoWeights.regular,
    color: materialColors.blackSecondary
  }
});