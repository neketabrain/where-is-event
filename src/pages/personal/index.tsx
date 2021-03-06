import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { ViewerInfo, viewerModel } from 'entities/viewer';
import { COLORS } from 'shared/config';
import { insertAtArray } from 'shared/lib';
import { Button, Menu, Icons } from 'shared/ui';

const Personal: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const viewer = viewerModel.selectors.useViewer();

  const baseMenuItems = [
    { label: 'Профиль', onPress: () => navigation.navigate('Profile'), Icon: Icons.UserIcon },
    { label: 'Избранное', onPress: () => navigation.navigate('Favourites'), Icon: Icons.HeartIcon },
    { label: 'Настройки', onPress: () => navigation.navigate('Settings'), Icon: Icons.CogIcon },
  ];
  const ownerMenuItems = [
    { label: 'Мои заведения', onPress: () => navigation.navigate('MyPlaces'), Icon: Icons.StoreIcon },
    { label: 'Мои события', onPress: () => navigation.navigate('MyEvents'), Icon: Icons.GlassIcon },
  ];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {!viewer && (
        <View style={styles.unathorizedBlock}>
          <Text style={styles.unathorizedText}>Для того, чтобы получить полный доступ необходимо войти в аккаунт</Text>
          <Button label="Войти" style={styles.signIn} onPress={() => navigation.navigate('Auth')} />
        </View>
      )}

      {!!viewer && (
        <View>
          <ViewerInfo viewer={viewer} />
          <Menu
            style={styles.menu}
            items={viewer?.isOwner ? insertAtArray(baseMenuItems, ownerMenuItems, 1) : baseMenuItems}
          />
          <Button
            label="Выйти"
            style={styles.signOut}
            variant="secondary"
            onPress={() => viewerModel.events.resetViewer()}
          />
        </View>
      )}
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
  unathorizedBlock: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  unathorizedText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: COLORS.grey1,
    textAlign: 'center',
  },
  signIn: {
    marginTop: 32,
  },
  signOut: {
    marginTop: 64,
  },
  menu: {
    marginTop: 48,
  },
});

export { Personal };
