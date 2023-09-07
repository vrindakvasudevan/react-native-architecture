import React, { FC } from 'react';
import { routeOverlayOption } from './routeOptions';
import { MainStackScreen } from './stacks/MainStack';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator screenOptions={routeOverlayOption}>
      <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
