/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const ChevronUpIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M12.071 10.328l-4.95 4.95a1 1 0 01-1.414-1.414l5.657-5.657a1 1 0 011.414 0l5.657 5.657a1 1 0 01-1.414 1.414l-4.95-4.95z" />
    </Svg>
  );
};

export { ChevronUpIcon };
