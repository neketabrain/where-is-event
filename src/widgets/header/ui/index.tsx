import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { viewerModel, ViewerPreview } from 'entities/viewer';
import { COLORS } from 'shared/config';
import { Icons } from 'shared/ui';

const width = Dimensions.get('window').width;

const Header: React.VFC<NativeStackHeaderProps> = (props) => {
  const { navigation, back } = props;
  const viewer = viewerModel.selectors.useViewer();

  return (
    <View style={styles.header}>
      {!!back && (
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.4}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Назад">
          <Icons.ChevronLeftIcon width={24} height={24} fill={COLORS.black2} />
        </TouchableOpacity>
      )}

      <View style={[styles.inputContainer, !!back && { maxWidth: width - 104 }]}>
        <Icons.SearchIcon style={styles.searchIcon} width={20} height={20} fill={COLORS.grey1} />
        <TextInput style={styles.input} placeholder="Поиск" placeholderTextColor={COLORS.grey1} />
      </View>

      {!!viewer && (
        <ViewerPreview viewer={viewer} onPress={() => navigation.navigate('Profile')} style={styles.profile} />
      )}

      {!viewer && (
        <TouchableOpacity
          accessibilityLabel={'Войти в аккаунт'}
          style={styles.signIn}
          activeOpacity={0.4}
          onPress={() => navigation.navigate('Auth')}>
          <Icons.SignInIcon width={24} height={24} fill={COLORS.black2} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white1,
    height: 50,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  inputContainer: {
    flexGrow: 1,
    height: 32,
    maxWidth: width - 64,
  },
  input: {
    backgroundColor: COLORS.grey3,
    borderRadius: 8,
    paddingRight: 8,
    paddingLeft: 40,
    paddingVertical: 0,
    height: 32,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: COLORS.black2,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 6,
    left: 12,
  },
  back: {
    paddingVertical: 4,
    paddingRight: 4,
    marginRight: 12,
  },
  signIn: {
    paddingVertical: 4,
    paddingLeft: 4,
    marginLeft: 12,
  },
  profile: {
    marginLeft: 8,
  },
});

export { Header };
