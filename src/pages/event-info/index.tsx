import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Title } from 'shared/ui';

const EventInfo: React.VFC<NativeStackScreenProps<RootStackParamList>> = () => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title>Событие</Title>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
  },
});

export default EventInfo;
