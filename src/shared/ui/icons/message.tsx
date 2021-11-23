/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const MessageIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M5.598 7l5.747 5.12a1 1 0 001.33 0L18.423 7H5.598zM20 8.273l-5.994 5.341a3 3 0 01-3.992 0L4 8.254V17h16V8.273zM4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </Svg>
  );
};

export { MessageIcon };
