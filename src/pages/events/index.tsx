import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Title } from 'shared/ui';

const Events: React.VFC<NativeStackScreenProps<{}>> = () => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title>События</Title>

      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
      <View style={styles.block} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
  },
  block: {
    height: 300,
    backgroundColor: '#eee',
    marginTop: 40,
    borderRadius: 8,
  },
});

export default Events;
