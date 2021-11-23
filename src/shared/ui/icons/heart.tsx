/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const HeartIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M5.636 11.208L12 17.572l6.364-6.364a3 3 0 10-4.243-4.243L12 9.086l-2.121-2.12a3 3 0 00-4.243 4.242zm5.657-5.658l.707.707.707-.707a5 5 0 117.071 7.071l-7.07 7.071a1 1 0 01-1.415 0l-7.071-7.07a5 5 0 117.07-7.071l.001-.001z" />
    </Svg>
  );
};

export { HeartIcon };
