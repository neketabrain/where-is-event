import React, { useRef } from 'react';
import { StyleSheet, TextInput, View, StyleProp, ViewStyle } from 'react-native';

import { Button, PasswordField } from 'shared/ui';

interface ChangePasswordFormProps {
  onSuccess?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ChangePasswordForm: React.VFC<ChangePasswordFormProps> = (props) => {
  const { onSuccess, style } = props;
  const newPasswordRef = useRef<TextInput>(null);

  function handleSubmit() {
    if (onSuccess) {
      onSuccess();
    }

    // TODO: Change password
  }

  return (
    <View style={style}>
      <PasswordField
        placeholder="Текущий пароль"
        textContentType="password"
        returnKeyType="next"
        onSubmitEditing={() => newPasswordRef.current?.focus()}
      />
      <PasswordField
        placeholder="Новый пароль"
        textContentType="password"
        returnKeyType="done"
        containerStyle={styles.input}
        ref={newPasswordRef}
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

export { ChangePasswordForm };
