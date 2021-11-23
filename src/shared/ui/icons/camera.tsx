/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const CameraIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M7.676 9H6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2h-1.676l-.387-1.501A2.002 2.002 0 0014 6h-4a2 2 0 00-1.937 1.499L7.676 9zm-1.55-2C6.57 5.275 8.136 4 10 4h4a4.002 4.002 0 013.874 3H18a4 4 0 014 4v5a4 4 0 01-4 4H6a4 4 0 01-4-4v-5a4 4 0 014-4h.126zM12 17a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4zm6-3a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
};

export { CameraIcon };
