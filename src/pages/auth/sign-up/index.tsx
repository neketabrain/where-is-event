import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { SignUpForm } from 'features/auth/sign-up';
import { COLORS } from 'shared/config';
import { Button, Title } from 'shared/ui';

const SignUp: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>Добро пожаловать!</Title>
      <Text style={styles.description}>
        Создайте аккаунт, чтобы отслеживать события в вашем городе и делиться ими с друзьями
      </Text>

      <SignUpForm style={styles.form} />

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Уже есть аккаунт?</Text>
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
    maxWidth: 290,
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

export { SignUp };
