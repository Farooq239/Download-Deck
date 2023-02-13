import React from 'react';
import { View, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../constants/icon';
import { ColorSet } from '../styles/Color';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
        </Tab.Navigator>
    );
}

export default TabNavigator;

