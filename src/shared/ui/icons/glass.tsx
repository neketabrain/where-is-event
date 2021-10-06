/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from 'shared/config';

const GlassIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M7.1 6h9.8a4.963 4.963 0 00-.9-2H8a4.963 4.963 0 00-.9 2zm9.8 2H7.1a5.002 5.002 0 009.8 0zM11 20v-6.07A7.002 7.002 0 017.101 2h9.798A7.002 7.002 0 0113 13.93V20h2a1 1 0 010 2H9a1 1 0 010-2h2z" />
    </Svg>
  );
};

export default GlassIcon;
