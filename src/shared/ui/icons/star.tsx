/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { Colors } from 'shared/config';

const StarIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={Colors.black2} {...props}>
      <Path d="M12 18.379l-6.173 3.245 1.179-6.874L2.01 9.882l6.902-1.003L12 2.624l3.087 6.255 6.902 1.003-4.995 4.868 1.18 6.874L12 18.379z" />
    </Svg>
  );
};

export default StarIcon;
