import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Viewer } from 'shared/api/viewer';
import { Colors } from 'shared/config';

type ViewerPreviewProps = {
  viewer: Viewer;
};

const ViewerPreview: React.VFC<ViewerPreviewProps> = (props) => {
  const { viewer } = props;

  if (!viewer.avatar) {
    const initials = `${viewer.firstName[0]}${viewer.lastName[0]}`;

    return (
      <View style={[styles.container, styles.mockImage]}>
        <Text style={styles.text}>{initials.toUpperCase()}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: viewer.avatar }} style={styles.image} />
    </View>
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
    backgroundColor: Colors.grey1,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: Colors.white2,
    fontSize: 14,
    lineHeight: 32,
  },
});

export default ViewerPreview;
