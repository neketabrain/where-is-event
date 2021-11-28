import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Button, TextField } from 'shared/ui';

interface ResetPasswordFormProps {
  onSuccess?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ResetPasswordForm: React.VFC<ResetPasswordFormProps> = (props) => {
  const { onSuccess, style } = props;

  function handleSubmit() {
    // TODO: Reset password

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
        returnKeyType="done"
      />

      <Button label="Восстановить" style={styles.button} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
  },
});

export { ResetPasswordForm };
