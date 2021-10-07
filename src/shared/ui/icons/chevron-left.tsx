/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { Colors } from 'shared/config';

const ChevronLeftIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={Colors.black2} {...props}>
      <Path d="M10.757 12l4.95 4.95a1 1 0 11-1.414 1.414l-5.657-5.657a1 1 0 010-1.414l5.657-5.657a1 1 0 011.414 1.414L10.757 12z" />
    </Svg>
  );
};

export default ChevronLeftIcon;
