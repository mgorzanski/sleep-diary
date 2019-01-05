import React from "react";
import { View, Text } from "react-native";
import { material, robotoWeights } from "react-native-typography";

import * as colors from "./../../styles/colors";

export default class MoreScreen extends React.Component {
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
      <View>
        <Text>More</Text>
      </View>
    );
  }
}
