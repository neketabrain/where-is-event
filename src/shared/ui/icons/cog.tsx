/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { COLORS } from '../../config';

const CogIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={COLORS.black2} {...props}>
      <Path d="M22 10.163a2.106 2.106 0 000 3.674l-.717 2.406a2.105 2.105 0 00-2.218 3.058l-2.062 1.602A2.104 2.104 0 0013.633 22l-3.29-.008a2.103 2.103 0 00-3.362-1.094l-2.06-1.615a2.105 2.105 0 00-2.206-3.043L2 13.825A2.106 2.106 0 003.051 12c0-.78-.421-1.46-1.051-1.825l.715-2.415a2.105 2.105 0 002.207-3.043L6.98 3.102a2.104 2.104 0 003.362-1.094L13.634 2a2.104 2.104 0 003.37 1.097l2.06 1.603a2.105 2.105 0 002.218 3.058L22 10.162v.001zM16.823 5.68c0-.063.002-.125.005-.188l-.08-.062a4.103 4.103 0 01-4.308-1.428l-.904.002a4.1 4.1 0 01-4.29 1.43l-.095.076A4.108 4.108 0 014.279 9.6a4.1 4.1 0 01.772 2.399c0 .882-.28 1.715-.772 2.4a4.108 4.108 0 012.872 4.09l.096.075a4.104 4.104 0 014.289 1.43l.904.002a4.1 4.1 0 014.307-1.428l.08-.062A4.107 4.107 0 0119.7 14.4a4.102 4.102 0 01-.773-2.4c0-.882.281-1.716.773-2.4a4.108 4.108 0 01-2.876-3.919l-.001-.001zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
};

export { CogIcon };
