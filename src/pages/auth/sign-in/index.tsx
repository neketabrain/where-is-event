import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';

import { Colors } from 'shared/config';
import { Button, Title, TextField, PasswordField } from 'shared/ui';

const SignIn: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const passwordRef = useRef<TextInput>(null);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>С возвращением!</Title>
      <Text style={styles.description}>Войдите в личный аккаунт и продолжайте отслеживать события в вашем городе</Text>

      <TextField
        placeholder="Электронная почта"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        style={styles.input}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <PasswordField
        placeholder="Пароль"
        textContentType="password"
        returnKeyType="done"
        containerStyle={styles.input}
        ref={passwordRef}
      />

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Забыли пароль?</Text>
        <Button variant="transparent" label="Восстановить" onPress={() => navigation.navigate('ResetPassword')} />
      </View>

      <Button label="Войти" style={styles.button} />

      <View style={[styles.linkContainer, styles.centered]}>
        <Text style={styles.linkText}>Нет аккаунта?</Text>
        <Button variant="transparent" label="Создать" onPress={() => navigation.navigate('SignUp')} />
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
    color: Colors.grey1,
    marginTop: 20,
    maxWidth: 290,
    marginBottom: 16,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 32,
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.black2,
  },
  centered: {
    justifyContent: 'center',
  },
});

export default SignIn;
