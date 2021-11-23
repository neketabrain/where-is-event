import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import React from 'react';

export const withActionSheet = (component: () => React.ReactNode) => () => {
  return <ActionSheetProvider>{component()}</ActionSheetProvider>;
};
