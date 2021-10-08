import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import { Color, SvgProps } from 'react-native-svg';

import { Colors } from 'shared/config';

type IconButtonProps = TouchableHighlightProps & {
  Icon: React.VFC<SvgProps>;
  variant?: 'primary' | 'secondary' | 'transparent';
  iconFill?: Color;
};

const IconButton: React.VFC<IconButtonProps> = (props) => {
  const { Icon, style, variant = 'primary', iconFill, ...rest } = props;
  const variantStyles = getStyles(variant);

  if (variant === 'transparent') {
    return (
      <TouchableOpacity style={[styles.button, variantStyles.button, style]} activeOpacity={0.4} {...rest}>
        <Icon width="24" height="24" fill={iconFill ?? variantStyles.icon} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableHighlight
      style={[styles.button, variantStyles.button, style]}
      underlayColor={variantStyles.underlayColor}
      {...rest}>
      <Icon width="24" height="24" fill={iconFill ?? variantStyles.icon} />
    </TouchableHighlight>
  );
};

const getStyles = (variant: IconButtonProps['variant']) => {
  if (variant === 'primary') {
    return {
      underlayColor: Colors.blue2,
      button: styles.primaryButton,
      icon: Colors.white2,
    };
  }

  if (variant === 'secondary') {
    return {
      underlayColor: Colors.grey5,
      button: styles.secondaryButton,
      icon: Colors.black2,
    };
  }

  if (variant === 'transparent') {
    return {
      button: styles.transparentButton,
      icon: Colors.black2,
    };
  }

  return {};
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  primaryButton: {
    backgroundColor: Colors.blue1,
  },
  secondaryButton: {
    backgroundColor: Colors.grey4,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
});

export default IconButton;
