import { NavigationProp, useNavigation } from '@react-navigation/core';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, View, Dimensions, StyleProp, ViewStyle } from 'react-native';

import { Button, TextField, PasswordField } from 'shared/ui';

const width = Dimensions.get('window').width;

interface SignUpFormProps {
  redirectPath?: keyof RootStackParamList;
  style?: StyleProp<ViewStyle>;
}

const SignUpForm: React.VFC<SignUpFormProps> = (props) => {
  const { redirectPath, style } = props;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const lastnameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  function handleSubmit() {
    if (redirectPath) {
      navigation.navigate(redirectPath);
    }

    // TODO: Sign up
  }

  return (
    <View style={style}>
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

      <Button label="Зарегистрироваться" style={styles.button} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export { SignUpForm };
