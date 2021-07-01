import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsScreen, ProfileScreen } from '../screens';

export const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        tabStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 40,
          borderWidth: 1,
          borderColor: 'black',
          borderBottomWidth: 2,
        },
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
