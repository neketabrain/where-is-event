import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Title } from 'shared/ui';

const Home: React.VFC<NativeStackScreenProps<RootStackParamList>> = () => {
  const ref = useRef<ScrollView>(null);
  useScrollToTop(ref);

  return (
    <ScrollView contentContainerStyle={styles.content} ref={ref}>
      <Title>Главная</Title>

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

export { Home };
