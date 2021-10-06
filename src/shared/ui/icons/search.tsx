/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

const SearchIcon: React.VFC<SvgProps> = props => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="#000000" {...props}>
      <Path d="M8.75 13.75a5 5 0 100-10 5 5 0 000 10zm5.267-.912L17 15.822a.833.833 0 11-1.18 1.177l-2.982-2.983a6.666 6.666 0 111.178-1.178z" />
    </Svg>
  );
};

export default SearchIcon;
