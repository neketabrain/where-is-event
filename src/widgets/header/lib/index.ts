import { useState, useCallback } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export const useHeaderShadow = () => {
  const [withShadow, setWithShadow] = useState(false);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset >= 24) {
      setWithShadow(true);
    } else {
      setWithShadow(false);
    }
  }, []);

  return { withShadow, handleScroll };
};
