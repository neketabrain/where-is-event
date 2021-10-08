import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, Dimensions } from 'react-native';

import { Colors } from 'shared/config';
import { Button, Title, TextField, PasswordField } from 'shared/ui';

const width = Dimensions.get('window').width;

const SignUp: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const lastnameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>Добро пожаловать!</Title>
      <Text style={styles.description}>
        Создайте аккаунт, чтобы отслеживать события в вашем городе и делиться ими с друзьями
      </Text>

      <View style={styles.inputRow}>
        <TextField
          placeholder="Имя"
          textContentType="name"
          returnKeyType="next"
          style={styles.halfInput}
          onSubmitEditing={() => lastnameRef.current?.focus()}
        />
        <TextField
          placeholder="Фамилия"
          textContentType="familyName"
          returnKeyType="next"
          style={styles.halfInput}
          onSubmitEditing={() => emailRef.current?.focus()}
          ref={lastnameRef}
        />
      </View>

      <TextField
        placeholder="Электронная почта"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        style={styles.input}
        ref={emailRef}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <PasswordField
        placeholder="Пароль"
        textContentType="password"
        returnKeyType="done"
        containerStyle={styles.input}
        ref={passwordRef}
      />

      <Button label="Зарегистрироваться" style={styles.button} />

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
    color: Colors.grey1,
    marginTop: 20,
    maxWidth: 290,
    marginBottom: 16,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  input: {
    marginTop: 16,
  },
  halfInput: {
    maxWidth: width / 2 - 24,
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

export default SignUp;
