import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { material, robotoWeights } from "react-native-typography";

import * as colors from "./../../styles/colors";

export default class DailyReminderScreen extends React.Component {
  static navigationOptions = {
    title: "Sleep Diary",
    headerStyle: {
      backgroundColor: colors.headerBarBackgroundColor
    },
    headerTitleStyle: {
      ...material.titleObject,
      ...robotoWeights.medium,
      color: colors.headerBarTextColor
    }
  };

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(247,247,247,1.0)'
  },
})