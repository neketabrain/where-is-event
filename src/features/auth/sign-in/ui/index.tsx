import { NavigationProp, useNavigation } from '@react-navigation/core';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, Text, View, StyleProp, ViewStyle } from 'react-native';

import { COLORS } from 'shared/config';
import { Button, TextField, PasswordField } from 'shared/ui';

interface SignInFormProps {
  onSuccess?: () => void;
  resetPasswordPath?: keyof RootStackParamList;
  style?: StyleProp<ViewStyle>;
}

const SignInForm: React.VFC<SignInFormProps> = (props) => {
  const { onSuccess, resetPasswordPath, style } = props;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const passwordRef = useRef<TextInput>(null);

  function handleSubmit() {
    // TODO: Sign in

    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <View style={style}>
      <TextField
        placeholder="Электронная почта"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <PasswordField
        placeholder="Пароль"
        textContentType="password"
        returnKeyType="done"
        containerStyle={styles.input}
        ref={passwordRef}
      />

      {!!resetPasswordPath && (
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Забыли пароль?</Text>
          <Button variant="transparent" label="Восстановить" onPress={() => navigation.navigate(resetPasswordPath)} />
        </View>
      )}

      <Button label="Войти" style={styles.button} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: COLORS.black2,
  },
});

export { SignInForm };
