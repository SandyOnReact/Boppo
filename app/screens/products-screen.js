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
        style: styles.tabBarStyle,
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        indicatorContainerStyle: styles.indicatorStyle,
      }}>
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Drinks" component={DrinkScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 15,
    opacity: 0.5,
  },
  indicatorStyle: {
    backgroundColor: 'lightskyblue',
    width: '100%',
  },
  tabStyle: {
    paddingLeft: 10,
  },
});
