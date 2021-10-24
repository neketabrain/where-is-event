import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { viewerModel } from 'entities/viewer';
import { EditViewerInfo } from 'features/edit-viewer-info';
import { Menu, Icons } from 'shared/ui';

const Edit: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const viewer = viewerModel.selectors.useViewer();

  const menuItems = useMemo(
    () => [
      { label: 'Изменить E-mail', onPress: () => navigation.navigate('EditEmail'), Icon: Icons.MessageIcon },
      { label: 'Изменить пароль', onPress: () => navigation.navigate('EditPassword'), Icon: Icons.LockIcon },
    ],
    [navigation],
  );

  if (!viewer) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View>
        <EditViewerInfo viewer={viewer} />
        <Menu style={styles.menu} items={menuItems} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
    display: 'flex',
    flexGrow: 1,
  },
  editInfo: {
    marginTop: 32,
  },
  menu: {
    marginTop: 48,
  },
});

export default Edit;
