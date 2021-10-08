import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from 'shared/config';
import { Button, Title, TextField } from 'shared/ui';

const Reset: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>Как это произошло?</Title>
      <Text style={styles.description}>
        Введите адрес электронной почты, на который был зарегистрирован аккаунт. Мы вышлем вам инструкцию
      </Text>

      <TextField
        placeholder="Электронная почта"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="done"
        style={styles.input}
      />

      <Button label="Восстановить" style={styles.button} />

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
    color: Colors.grey1,
    marginTop: 20,
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
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.black2,
  },
});

export default Reset;
