import React, { useState, forwardRef, useCallback } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { COLORS } from '../../config';
import { IconButton } from '../icon-button';
import { EyeIcon, EyeClosedIcon } from '../icons';

interface PasswordFieldProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const PasswordField = forwardRef<TextInput, PasswordFieldProps>((props, ref) => {
  const { style, containerStyle, onFocus, onBlur, ...rest } = props;
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isSecured, setSecured] = useState<boolean>(true);

  function handleFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  }

  function handleBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  }

  const toggleSecure = useCallback(() => {
    setSecured((prev) => !prev);
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, isFocused && styles.focused, style]}
        blurOnSubmit={true}
        placeholderTextColor={COLORS.grey1}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textContentType="password"
        secureTextEntry={isSecured}
        ref={ref}
        {...rest}
      />
      <IconButton
        Icon={isSecured ? EyeIcon : EyeClosedIcon}
        style={styles.button}
        variant="transparent"
        iconFill={COLORS.grey1}
        onPress={toggleSecure}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    paddingLeft: 12,
    paddingRight: 40,
    fontFamily: 'Roboto-Regular',
    color: COLORS.black2,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.grey1,
    borderRadius: 8,
    width: '100%',
    height: 40,
  },
  focused: {
    borderColor: COLORS.black2,
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export { PasswordField };
