import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ResetPasswordForm } from 'features/auth/reset-password';
import { COLORS } from 'shared/config';
import { Button, Title } from 'shared/ui';

const ResetPassword: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>Как это произошло?</Title>
      <Text style={styles.description}>
        Введите адрес электронной почты, на который был зарегистрирован аккаунт. Мы вышлем вам инструкцию
      </Text>

      <ResetPasswordForm style={styles.form} />

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Вспомнили пароль?</Text>
        <Button variant="transparent" label="Войти" onPress={() => navigation.navigate('SignIn')} />
      </View>
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
    marginBottom: 16,
  },
  form: {
    marginTop: 16,
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: COLORS.black2,
  },
});

export { ResetPassword };
