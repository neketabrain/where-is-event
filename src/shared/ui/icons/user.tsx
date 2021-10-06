/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from 'shared/config';

export const UserIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M8.534 12.07a1 1 0 11.733 1.86A3.58 3.58 0 007 17.26V19a1 1 0 001 1h8a1 1 0 001-1v-1.647a3.658 3.658 0 00-2.356-3.419 1 1 0 11.712-1.868A5.658 5.658 0 0119 17.353V19a3 3 0 01-3 3H8a3 3 0 01-3-3v-1.74a5.58 5.58 0 013.534-5.19zM12 2a4 4 0 014 4v2a4 4 0 11-8 0V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v2a2 2 0 104 0V6a2 2 0 00-2-2z" />
    </Svg>
  );
};

export default UserIcon;
