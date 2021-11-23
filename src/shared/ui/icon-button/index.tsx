import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import { Color, SvgProps } from 'react-native-svg';

import { COLORS } from '../../config';

type IconButtonVariants = 'primary' | 'secondary' | 'transparent';

interface IconButtonProps extends TouchableHighlightProps {
  Icon: React.VFC<SvgProps>;
  variant?: IconButtonVariants;
  iconFill?: Color;
}

const IconButton: React.VFC<IconButtonProps> = (props) => {
  const { Icon, style, variant = 'primary', iconFill, ...rest } = props;
  const variantStyles = getIconButtonStyles(variant);

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

function getIconButtonStyles(variant: IconButtonVariants) {
  if (variant === 'primary') {
    return {
      underlayColor: COLORS.blue2,
      button: styles.primaryButton,
      icon: COLORS.white2,
    };
  }

  if (variant === 'secondary') {
    return {
      underlayColor: COLORS.grey5,
      button: styles.secondaryButton,
      icon: COLORS.black2,
    };
  }

  if (variant === 'transparent') {
    return {
      button: styles.transparentButton,
      icon: COLORS.black2,
    };
  }

  return {};
}

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
    backgroundColor: COLORS.blue1,
  },
  secondaryButton: {
    backgroundColor: COLORS.grey4,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
});

export { IconButton };
