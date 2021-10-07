import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { Colors } from 'shared/config';
import { SignInIcon, SearchIcon, ChevronLeftIcon } from 'shared/ui/icons/';

const width = Dimensions.get('window').width;

const Header: React.VFC<NativeStackHeaderProps> = (props) => {
  const { navigation, back } = props;

  return (
    <View style={styles.header}>
      {!!back && (
        <TouchableOpacity style={styles.leftButton} activeOpacity={0.4} onPress={() => navigation.goBack()}>
          <ChevronLeftIcon />
        </TouchableOpacity>
      )}

      <View style={[styles.inputContainer, !!back && { maxWidth: width - 104 }]}>
        <SearchIcon style={styles.searchIcon} width={20} height={20} fill={Colors.grey1} />
        <TextInput style={styles.input} placeholder="Поиск" placeholderTextColor={Colors.grey1} />
      </View>

      <TouchableOpacity style={styles.rightButton} activeOpacity={0.4} onPress={() => navigation.navigate('Auth')}>
        <SignInIcon />
      </TouchableOpacity>
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
  leftButton: {
    paddingVertical: 4,
    paddingRight: 4,
    marginRight: 8,
  },
  rightButton: {
    paddingVertical: 4,
    paddingLeft: 4,
    marginLeft: 8,
  },
});

export default Header;
