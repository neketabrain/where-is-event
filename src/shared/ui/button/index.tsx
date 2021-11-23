import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, TouchableOpacity } from 'react-native';

import { COLORS } from '../../config';

type ButtonVariants = 'primary' | 'secondary' | 'transparent';

interface ButtonProps extends TouchableHighlightProps {
  label: string;
  variant?: ButtonVariants;
}

const Button: React.VFC<ButtonProps> = (props) => {
  const { label, style, variant = 'primary', ...rest } = props;
  const variantStyles = getButtonStyles(variant);

  if (variant === 'transparent') {
    return (
      <TouchableOpacity style={[styles.button, variantStyles.button, style]} activeOpacity={0.4} {...rest}>
        <Text style={[styles.text, variantStyles.text]}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableHighlight
      style={[styles.button, variantStyles.button, style]}
      underlayColor={variantStyles.underlayColor}
      {...rest}>
      <Text style={[styles.text, variantStyles.text]}>{label}</Text>
    </TouchableHighlight>
  );
};

function getButtonStyles(variant: ButtonVariants) {
  if (variant === 'primary') {
    return {
      underlayColor: COLORS.blue2,
      button: styles.primaryButton,
      text: styles.primaryText,
    };
  }

  if (variant === 'secondary') {
    return {
      underlayColor: COLORS.grey5,
      button: styles.secondaryButton,
      text: styles.secondaryText,
    };
  }

  if (variant === 'transparent') {
    return {
      button: styles.transparentButton,
      text: styles.transparentText,
    };
  }

  return {};
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingLeft: 32,
    paddingRight: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  primaryButton: {
    backgroundColor: COLORS.blue1,
  },
  secondaryButton: {
    backgroundColor: COLORS.grey4,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    paddingLeft: 4,
    paddingRight: 4,
    height: 'auto',
  },
  primaryText: {
    color: COLORS.white2,
  },
  secondaryText: {
    color: COLORS.black2,
  },
  transparentText: {
    color: COLORS.black2,
    textDecorationLine: 'underline',
  },
});

export { Button };
