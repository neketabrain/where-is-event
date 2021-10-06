import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { COLORS } from 'shared/config';

import Main from './main';

const Stack = createNativeStackNavigator();

const Pages: React.VFC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: COLORS.white1 } }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Pages;
