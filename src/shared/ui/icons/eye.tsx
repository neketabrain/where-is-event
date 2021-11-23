/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const EyeIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M20 12c0-1.81-3.76-3.985-8.007-4C7.775 7.985 4 10.178 4 12c0 1.825 3.754 4.006 7.997 4C16.252 15.994 20 13.82 20 12zm-8 6c-5.042.007-10-2.686-10-6s4.984-6.017 10-6c5.016.017 10 2.686 10 6s-4.958 5.993-10 6zm0-2a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
};

export { EyeIcon };
