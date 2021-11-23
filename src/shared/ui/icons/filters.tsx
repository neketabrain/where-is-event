/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const FiltersIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M11 16V5a1 1 0 012 0v11h1a1 1 0 010 2h-1v1a1 1 0 01-2 0v-1h-1a1 1 0 010-2h1zm7-10V5a1 1 0 012 0v1h1a1 1 0 110 2h-1v11a1 1 0 01-2 0V8h-1a1 1 0 110-2h1zM6 9h1a1 1 0 010 2H6v8a1 1 0 11-2 0v-8H3a1 1 0 010-2h1V5a1 1 0 012 0v4z" />
    </Svg>
  );
};

export { FiltersIcon };
