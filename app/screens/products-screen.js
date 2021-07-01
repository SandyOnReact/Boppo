import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FoodScreen } from './food-screen';
import { DrinkScreen } from './drinks-screen';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const ProductsScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: 'none', fontSize: 14 },
        tabStyle: styles.tabStyle,
        indicatorStyle: styles.indicatorStyle,
        style: styles.tabBarStyle,
        activeTintColor: 'blue',
      }}>
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Drinks" component={DrinkScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'aqua',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 5,
    opacity: 0.5,
  },
  indicatorStyle: {
    backgroundColor: 'blue',
    width: 0,
  },
  tabStyle: {
    paddingLeft: 10,
  },
});
