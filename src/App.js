import React from 'react';
import { ToolbarAndroid, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/Home';
import StatisticsScreen from './screens/Statistics';
import MoreScreen from './screens/More';

class App extends React.Component {
  render() {
    return (
      <View>
        <ToolbarAndroid
          title="Sleep Diary"
        />
        <TabNavigator />
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Home: HomeScreen,
  Statistics: StatisticsScreen,
  More: MoreScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = MaterialCommunityIcons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Statistics') {
        iconName = `chart-areaspline`
      } else if (routeName === 'More') {
        iconName = `menu`;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    }
  })
});

export default createAppContainer(TabNavigator);