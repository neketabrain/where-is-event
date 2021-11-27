import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Button, TextField } from 'shared/ui';

interface ResetPasswordFormProps {
  redirectPath?: keyof RootStackParamList;
  style?: StyleProp<ViewStyle>;
}

const ResetPasswordForm: React.VFC<ResetPasswordFormProps> = (props) => {
  const { redirectPath, style } = props;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleSubmit() {
    if (redirectPath) {
      navigation.navigate(redirectPath);
    }

    // TODO: Reset password
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
