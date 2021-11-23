import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import React from 'react';

function withActionSheet(component: () => React.ReactNode) {
  return () => <ActionSheetProvider>{component()}</ActionSheetProvider>;
}

export { withActionSheet };
