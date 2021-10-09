import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from 'shared/config';

type ViewerPreviewProps = {
  // TODO: Указать тип из shared/api
  viewer?: Object;
};

const ViewerPreview: React.VFC<ViewerPreviewProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    backgroundColor: Colors.grey1,
    borderRadius: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: Colors.white2,
    fontSize: 14,
    lineHeight: 32,
  },
});

export default ViewerPreview;
