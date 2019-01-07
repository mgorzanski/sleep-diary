import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  material,
  robotoWeights,
  materialColors
} from "react-native-typography";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryScatter
} from "victory-native";
import CardView from "react-native-cardview";

import * as colors from "./../../styles/colors";
import card from "./../../styles/card";
import TextButton from "./../../components/TextButton";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <CardView cardElevation={3} cardMaxElevation={3} cornerRadius={5}>
          <View style={styles.history}>
            <MaterialCommunityIcons
              name="arrow-left-drop-circle-outline"
              size={25}
            />
            <Text style={styles.historyText}>History</Text>
            <MaterialCommunityIcons
              name="arrow-right-drop-circle-outline"
              size={25}
            />
          </View>
          <View style={styles.chart}>
            <VictoryChart height={200} theme={VictoryTheme.material}>
              <VictoryLine
                interpolation="linear"
                data={data}
                style={{ data: { stroke: "#c43a31" } }}
              />
              <VictoryScatter
                data={data}
                size={5}
                style={{ data: { fill: "#c43a31" } }}
              />
            </VictoryChart>
            <TextButton
              onPress={() => this.props.navigation.navigate("Statistics")}
              title="GO TO STATISTICS"
              textColor={colors.textButtonColor}
              underlayColor={colors.textButtonUnderlayColor}
              style={styles.textButton}
            />
          </View>
        </CardView>
        <View style={{ marginTop: 15 }}></View>
        <CardView cardElevation={3} cardMaxElevation={3} cornerRadius={5}>
          <Text style={card.title}>New entry</Text>
          
        </CardView>
      </View>
    );
  }
}

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    margin: 10
  },
  history: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#9e9e9e",
    borderBottomWidth: 1
  },
  historyText: {
    ...material.titleObject,
    ...robotoWeights.regular,
    color: materialColors.blackSecondary
  },
  chart: {
    marginTop: -35
  },
  textButton: {
    marginLeft:8,
    marginBottom:8
  }
});
