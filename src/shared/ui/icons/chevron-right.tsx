/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const ChevronRightIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M13.314 12.071l-4.95-4.95a1 1 0 011.414-1.414l5.657 5.657a1 1 0 010 1.414l-5.657 5.657a1 1 0 01-1.414-1.414l4.95-4.95z" />
    </Svg>
  );
};

export { ChevronRightIcon };
