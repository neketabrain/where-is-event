import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { Viewer } from 'shared/api/viewer';
import { COLORS } from 'shared/config';

import { getViewerInitials } from '../../../viewer/lib';

interface ViewerPreviewProps {
  viewer: Viewer;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ViewerPreview: React.VFC<ViewerPreviewProps> = (props) => {
  const { viewer, onPress, style } = props;
  const initials = getViewerInitials(viewer);

  return (
    <TouchableOpacity accessibilityLabel={'Перейти в профиль'} style={style} activeOpacity={0.4} onPress={onPress}>
      <View style={[styles.container, !viewer.avatar && styles.mockImage]}>
        {!viewer.avatar && <Text style={styles.text}>{initials.toUpperCase()}</Text>}
        {!!viewer.avatar && <Image source={{ uri: viewer.avatar }} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockImage: {
    backgroundColor: COLORS.grey1,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: COLORS.white2,
    fontSize: 14,
    lineHeight: 32,
  },
});

export { ViewerPreview };
