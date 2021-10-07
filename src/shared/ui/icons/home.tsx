/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { Colors } from 'shared/config';

const HomeIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={Colors.black2} {...props}>
      <Path d="M20 20V9.132l-8-4.8-8 4.8V20h4v-2.75a4 4 0 118 0V20h4zm-6 2v-4.75a2 2 0 00-4 0V22H4a2 2 0 01-2-2V9.132a2 2 0 01.971-1.715l8-4.8a2 2 0 012.058 0l8 4.8A2 2 0 0122 9.132V20a2 2 0 01-2 2h-6z" />
    </Svg>
  );
};

export default HomeIcon;
