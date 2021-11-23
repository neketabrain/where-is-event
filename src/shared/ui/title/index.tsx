import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { COLORS } from '../../config';

const Title: React.FC<TextProps> = (props) => {
  const { style, children, ...rest } = props;

  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat-Light',
    color: COLORS.black2,
  },
});

export { Title };
