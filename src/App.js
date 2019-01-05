import React from "react";
import { StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screens/Home";
import StatisticsScreen from "./screens/Statistics";
import MoreScreen from "./screens/More";
import * as colors from './styles/colors';

StatusBar.setBackgroundColor(colors.statusBarColorWithoutHeaderBar);

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const StatisticsStack = createStackNavigator({
  Statistics: StatisticsScreen
});

const MoreStack = createStackNavigator({
  More: MoreScreen
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Statistics: StatisticsStack,
    More: MoreStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialCommunityIcons;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
        } else if (routeName === "Statistics") {
          iconName = `chart-areaspline`;
        } else if (routeName === "More") {
          iconName = `menu`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        const { routeName } = navigation.state;
        if (routeName === 'More') StatusBar.setBackgroundColor(colors.statusBarColor);
        else StatusBar.setBackgroundColor(colors.statusBarColorWithoutHeaderBar);
        defaultHandler();
      },
      barStyle: { backgroundColor: colors.bottomBarBackgroundColor }
    })
  }
);

export default createAppContainer(TabNavigator);
