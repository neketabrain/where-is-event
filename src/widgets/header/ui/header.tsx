import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { viewerModel, ViewerPreview } from 'entities/viewer';
import { Colors } from 'shared/config';
import { SignInIcon, SearchIcon, ChevronLeftIcon } from 'shared/ui/icons/';

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
          <ChevronLeftIcon width={24} height={24} fill={Colors.black2} />
        </TouchableOpacity>
      )}

      <View style={[styles.inputContainer, !!back && { maxWidth: width - 104 }]}>
        <SearchIcon style={styles.searchIcon} width={20} height={20} fill={Colors.grey1} />
        <TextInput style={styles.input} placeholder="Поиск" placeholderTextColor={Colors.grey1} />
      </View>

      {!!viewer && (
        <TouchableOpacity
          accessibilityLabel={'Перейти в профиль'}
          style={styles.profile}
          activeOpacity={0.4}
          onPress={() => navigation.navigate('Profile')}>
          <ViewerPreview viewer={viewer} />
        </TouchableOpacity>
      )}

      {!viewer && (
        <TouchableOpacity
          accessibilityLabel={'Войти в аккаунт'}
          style={styles.signIn}
          activeOpacity={0.4}
          onPress={() => navigation.navigate('Auth')}>
          <SignInIcon width={24} height={24} fill={Colors.black2} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white1,
    height: 50,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    zIndex: 2,
  },
  inputContainer: {
    flexGrow: 1,
    height: 32,
    maxWidth: width - 64,
  },
  input: {
    backgroundColor: Colors.grey3,
    borderRadius: 8,
    paddingRight: 8,
    paddingLeft: 40,
    height: 32,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.black2,
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

export default Header;
