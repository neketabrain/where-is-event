import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { BottomMenu } from 'features/bottom-menu';
import { Header, headerLib } from 'widgets/header';

const Main: React.VFC<NativeStackScreenProps<{}>> = () => {
  const { withShadow, handleScroll } = headerLib.useHeaderShadow();

  return (
    <>
      <Header withShadow={withShadow} />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={100} contentContainerStyle={styles.content}>
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
      </ScrollView>
      <BottomMenu />
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  block: {
    height: 300,
    backgroundColor: '#eee',
    marginTop: 40,
    borderRadius: 8,
  },
});

export default Main;
