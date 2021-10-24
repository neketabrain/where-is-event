/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { Colors } from 'shared/config';

const LockIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={Colors.black2} {...props}>
      <Path d="M7 14v6h10v-6H7zm10-2a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2V7a5 5 0 1110 0v5zm-2 0V7a3 3 0 00-6 0v5h6zm-3 7a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
};

export default LockIcon;
