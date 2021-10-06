import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export const withNavigation = (component: () => React.ReactNode) => () => {
  return <NavigationContainer>{component()}</NavigationContainer>;
};
