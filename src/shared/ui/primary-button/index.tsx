import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableHighlightProps } from 'react-native';

import { Colors } from 'shared/config';

type PrimaryButtonProps = TouchableHighlightProps & {
  text: string;
};

const PrimaryButton: React.VFC<PrimaryButtonProps> = (props) => {
  const { text, style, ...rest } = props;

  return (
    <TouchableHighlight style={[styles.primaryButton, style]} underlayColor={Colors.blue2} onPress={() => {}} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.blue1,
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
    color: Colors.white2,
  },
});

export default PrimaryButton;
