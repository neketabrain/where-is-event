import React, { useRef } from 'react';
import { StyleSheet, TextInput, View, StyleProp, ViewStyle } from 'react-native';

import { Button, TextField, PasswordField } from 'shared/ui';

interface ChangeEmailFormProps {
  onSuccess?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ChangeEmailForm: React.VFC<ChangeEmailFormProps> = (props) => {
  const { onSuccess, style } = props;
  const emailRef = useRef<TextInput>(null);

  function handleSubmit() {
    // TODO: Change email

    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <View style={style}>
      <PasswordField
        placeholder="Пароль"
        textContentType="password"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
      />
      <TextField
        placeholder="Новый адрес эл. почты"
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="done"
        ref={emailRef}
        style={styles.input}
      />

      <Button label="Изменить" style={styles.button} onPress={handleSubmit} />
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
});

export { ChangeEmailForm };
