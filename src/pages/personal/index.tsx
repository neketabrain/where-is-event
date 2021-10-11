import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { ViewerInfo, viewerModel } from 'entities/viewer';
import { Colors } from 'shared/config';
import { Button, Menu, Icons } from 'shared/ui';

const Personal: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const viewer = viewerModel.selectors.useViewer();

  const menuItems = useMemo(
    () => [
      { label: 'Профиль', onPress: () => navigation.navigate('Profile'), Icon: Icons.UserIcon },
      { label: 'Избранное', onPress: () => navigation.navigate('Favourites'), Icon: Icons.HeartIcon },
      { label: 'Настройки', onPress: () => navigation.navigate('Settings'), Icon: Icons.CogIcon },
    ],
    [navigation],
  );
  const ownerMenuItems = useMemo(
    () => [
      { label: 'Профиль', onPress: () => navigation.navigate('Profile'), Icon: Icons.UserIcon },
      { label: 'Мои заведения', onPress: () => navigation.navigate('MyPlaces'), Icon: Icons.StoreIcon },
      { label: 'Мои события', onPress: () => navigation.navigate('MyEvents'), Icon: Icons.GlassIcon },
      { label: 'Избранное', onPress: () => navigation.navigate('Favourites'), Icon: Icons.HeartIcon },
      { label: 'Настройки', onPress: () => navigation.navigate('Settings'), Icon: Icons.CogIcon },
    ],
    [navigation],
  );

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
          <Menu style={styles.menu} items={viewer?.isOwner ? ownerMenuItems : menuItems} />
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
    color: Colors.grey1,
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

export default Personal;
