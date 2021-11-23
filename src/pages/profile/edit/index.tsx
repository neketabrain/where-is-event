import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { viewerModel } from 'entities/viewer';
import { EditAvatar } from 'features/edit-avatar';
import { EditProfileInfo } from 'features/edit-profile-info';
import { Menu, Icons } from 'shared/ui';

const Edit: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const viewer = viewerModel.selectors.useViewer();

  const menuItems = [
    { label: 'Изменить E-mail', onPress: () => navigation.navigate('EditEmail'), Icon: Icons.MessageIcon },
    { label: 'Изменить пароль', onPress: () => navigation.navigate('EditPassword'), Icon: Icons.LockIcon },
  ];

  if (!viewer) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View>
        <View style={styles.editAvatar}>
          <EditAvatar viewer={viewer} />
        </View>
        <EditProfileInfo viewer={viewer} style={styles.editInfo} />
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
  editAvatar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  editInfo: {
    marginTop: 32,
  },
  menu: {
    marginTop: 48,
  },
});

export { Edit };
