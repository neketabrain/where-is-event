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

import { Colors } from 'shared/config';

import IconButton from '../icon-button';
import { EyeIcon, EyeClosedIcon } from '../icons';

type PasswordFieldProps = TextInputProps & {
  containerStyle: StyleProp<ViewStyle>;
};

const PasswordField = forwardRef<TextInput, PasswordFieldProps>((props, ref) => {
  const { style, containerStyle, onFocus, onBlur, ...rest } = props;
  const [isFocused, setFocused] = useState(false);
  const [isSecured, setSecured] = useState(true);

  const handleFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const toggleSecure = useCallback(() => {
    setSecured((prev) => !prev);
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, isFocused && styles.focused, style]}
        blurOnSubmit={true}
        placeholderTextColor={Colors.grey1}
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
        iconFill={Colors.grey1}
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
    color: Colors.black2,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.grey1,
    borderRadius: 8,
    width: '100%',
    height: 40,
  },
  focused: {
    borderColor: Colors.black2,
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default PasswordField;
