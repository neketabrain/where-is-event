/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from 'shared/config';

const SearchIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M10.5 16.5a6 6 0 100-12 6 6 0 000 12zm6.32-1.094l3.58 3.58a1.001 1.001 0 01-.705 1.719 1.001 1.001 0 01-.71-.306l-3.58-3.58a8 8 0 111.414-1.414l.001.001z" />
    </Svg>
  );
};

export default SearchIcon;
