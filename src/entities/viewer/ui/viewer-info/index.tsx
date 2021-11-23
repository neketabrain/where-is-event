import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Viewer } from 'shared/api/viewer';
import { COLORS } from 'shared/config';

import { getViewerInitials } from '../../../viewer/lib';

interface ViewerInfoProps {
  viewer: Viewer;
}

const ViewerInfo: React.VFC<ViewerInfoProps> = (props) => {
  const { viewer } = props;
  const initials = getViewerInitials(viewer);

  return (
    <View style={styles.container}>
      {!!viewer.avatar && <Image source={{ uri: viewer.avatar }} style={styles.image} />}
      {!viewer.avatar && (
        <View style={[styles.image, styles.mockImage]}>
          <Text style={styles.initials}>{initials.toUpperCase()}</Text>
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.text}>{viewer.firstName}</Text>
        <Text style={styles.text}>{viewer.lastName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  mockImage: {
    backgroundColor: COLORS.grey1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontFamily: 'Roboto-Medium',
    color: COLORS.white2,
    fontSize: 24,
    lineHeight: 64,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 48,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.black2,
    fontSize: 24,
    lineHeight: 32,
  },
  textContainer: {
    marginLeft: 24,
  },
});

export { ViewerInfo };
