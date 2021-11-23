/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const BellIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M16.666 13.782L16 13.186V8a4 4 0 10-8 0v5.186l-.666.596A6.987 6.987 0 005.29 17h13.42a6.987 6.987 0 00-2.044-3.218zM15 19a3 3 0 01-6 0H3a8.978 8.978 0 013-6.708V8a6 6 0 0112 0v4.292A8.978 8.978 0 0121 19h-6zm-3 1a1 1 0 001-1h-2a1 1 0 001 1z" />
    </Svg>
  );
};

export { BellIcon };
