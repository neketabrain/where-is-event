import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors } from 'shared/config';

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
    color: Colors.black2,
  },
});

export default Title;
