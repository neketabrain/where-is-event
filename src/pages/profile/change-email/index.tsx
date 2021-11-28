import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { ChangeEmailForm } from 'features/viewer/change-email';
import { COLORS } from 'shared/config';
import { Title } from 'shared/ui';

const ChangeEmail: React.VFC<NativeStackScreenProps<RootStackParamList>> = () => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>Изменение электронной почты</Title>
      <Text style={styles.description}>
        Для того, чтобы изменить E-mail введите текущий пароль, а затем новый адрес электронной почты
      </Text>

      <ChangeEmailForm style={styles.form} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: COLORS.grey1,
    marginTop: 20,
    maxWidth: 290,
    marginBottom: 16,
  },
  form: {
    marginTop: 16,
  },
});

export { ChangeEmail };
