import React, { useState, forwardRef } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, StyleSheet, TextInput, TextInputProps } from 'react-native';

import { COLORS } from '../../config';

const TextField = forwardRef<TextInput, TextInputProps>((props, ref) => {
  const { style, onFocus, onBlur, ...rest } = props;
  const [isFocused, setFocused] = useState<boolean>(false);

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

  return (
    <TextInput
      style={[styles.input, isFocused && styles.focused, style]}
      blurOnSubmit={true}
      placeholderTextColor={COLORS.grey1}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={ref}
      {...rest}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
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
});

export { TextField };
