/* eslint-disable max-len */

import React from 'react';
import { SvgProps, Path, Svg } from 'react-native-svg';

import { Colors } from 'shared/config';

const StoreIcon: React.VFC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={Colors.black2} {...props}>
      <Path d="M8.5 4h-3a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V4zm-2.99 6v9.965H7.5V15a2 2 0 012-2h2a2 2 0 012 2v4.965h6.013V10H17.5c-.768 0-1.47-.289-2-.764a2.99 2.99 0 01-2 .764h-2c-.768 0-1.47-.289-2-.764a2.99 2.99 0 01-2 .764H5.51zm-2-.754A2.993 2.993 0 012.5 7V5a3 3 0 013-3h14a3 3 0 013 3v2c0 .882-.38 1.676-.987 2.225v10.74a2 2 0 01-2 2h-7.64A2.003 2.003 0 0111.5 22h-2c-.125 0-.25-.012-.373-.035H5.511a2 2 0 01-2-2V9.245l-.001.001zm7.99 10.72V15h-2v4.965h2v.001zM14.5 4h-4v3a1 1 0 001 1h2a1 1 0 001-1V4zm2 0v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-3zm0 9h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1z" />
    </Svg>
  );
};

export default StoreIcon;
