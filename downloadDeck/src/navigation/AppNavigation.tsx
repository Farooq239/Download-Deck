import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import Home from '../screen/Home';
import LandingScreen from '../screen/LandingScreen';
import DownloadScreen from '../screen/DownloadScreen';


const DashboardStack = createNativeStackNavigator();

const Dashboard = ({ }) => {
  return (
    <DashboardStack.Navigator
      initialRouteName={'LandingScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <DashboardStack.Screen name={'LandingScreen'} component={LandingScreen} />
      <DashboardStack.Screen name={'Home'} component={Home} />
      <DashboardStack.Screen name={'DownloadScreen'} component={DownloadScreen} />
    </DashboardStack.Navigator>
  );
};




const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<{}> = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
        {/* <Stack.Screen name={'Dashboard'} component={Dashboard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
