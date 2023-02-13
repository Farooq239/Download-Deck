import React from 'react';
import { View, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Dashboard/Home';
import Services from '../screens/Dashboard/Services';
import Invite from '../screens/Dashboard/Invite';
import { Icons } from '../constants/icon';
import { ColorSet } from '../styles/Color';
import Setting from '../screens/Dashboard/Setting';
import Help from '../screens/Dashboard/Help';
import Drawers from './Drawers';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="Home"
                component={Drawers}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Image
                                source={Icons.ic_home}
                                style={{ width: 25, height: 25, tintColor: ColorSet.red }}
                            />
                        ) : (
                            <Image source={Icons.ic_home} style={{ width: 25, height: 25 }} />
                        ),
                }}
            />
            <Tab.Screen
                name="Services"
                component={Services}
                options={{
                    tabBarLabel: 'Services',
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Image
                                source={Icons.ic_services}
                                style={{ width: 25, height: 25, tintColor: ColorSet.red }}
                            />
                        ) : (
                            <Image
                                source={Icons.ic_services}
                                style={{ width: 25, height: 25 }}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Image
                                source={Icons.ic_settings}
                                style={{ width: 25, height: 25, tintColor: ColorSet.red }}
                            />
                        ) : (
                            <Image
                                source={Icons.ic_settings}
                                style={{ width: 25, height: 25 }}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Invite"
                component={Invite}
                options={{
                    tabBarLabel: 'Invite',
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Image
                                source={Icons.ic_invite}
                                style={{ width: 25, height: 25, tintColor: ColorSet.red }}
                            />
                        ) : (
                            <Image source={Icons.ic_invite} style={{ width: 25, height: 25 }} />
                        ),
                }}
            />
            <Tab.Screen
                name="Help"
                component={Help}
                options={{
                    tabBarLabel: 'Help',
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <Image
                                source={Icons.ic_message}
                                style={{ width: 25, height: 25, tintColor: ColorSet.red }}
                            />
                        ) : (
                            <Image
                                source={Icons.ic_message}
                                style={{ width: 25, height: 25 }}
                            />
                        ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;
