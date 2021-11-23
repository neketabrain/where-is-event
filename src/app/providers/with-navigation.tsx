import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

function withNavigation(component: () => React.ReactNode) {
  return () => <NavigationContainer>{component()}</NavigationContainer>;
}

export { withNavigation };
