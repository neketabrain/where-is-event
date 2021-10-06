/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from 'shared/config';

const SignInIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M11.641 12.828H6a1 1 0 010-2h5.641l-1.12-1.12a1 1 0 011.413-1.415l2.829 2.827a.999.999 0 010 1.415l-2.829 2.828a1 1 0 01-1.414-1.413l1.121-1.122zM18 3a1 1 0 011 1v16a1 1 0 01-2 0V4a1 1 0 011-1z" />
    </Svg>
  );
};

export default SignInIcon;
