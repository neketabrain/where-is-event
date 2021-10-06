import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from 'shared/config';

export const withSafeArea = (component: () => React.ReactNode) => () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.view}>{component()}</SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.white1,
    flex: 1,
  },
});
