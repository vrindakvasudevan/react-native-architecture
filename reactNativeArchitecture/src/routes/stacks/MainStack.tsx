import Homepage from '../../screens/HomePage/index';
import { FC } from 'react';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '@screens/Users';
import { routeOverlayOption } from '@routes/routeOptions';

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home" screenOptions={routeOverlayOption}>
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <MainStack.Screen
        name="Users"
        component={Users}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </MainStack.Navigator>
  );
};
