/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { Colors } from 'shared/config';

const ChevronDownIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={Colors.black2} {...props}>
      <Path d="M12.071 13.314l4.95-4.95a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 01-1.414 0L5.707 9.778a1 1 0 111.414-1.414l4.95 4.95z" />
    </Svg>
  );
};

export default ChevronDownIcon;
