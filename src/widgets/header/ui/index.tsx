import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { COLORS } from 'shared/config';
import { SignInIcon, SearchIcon } from 'shared/ui/icons/';

const width = Dimensions.get('window').width;

type HeaderProps = {
  withShadow?: boolean;
};

const Header: React.VFC<HeaderProps> = (props) => {
  const { withShadow } = props;

  return (
    <View style={[styles.header, withShadow ? styles.headerWithShadow : {}]}>
      <View style={styles.inputContainer}>
        <SearchIcon style={styles.searchIcon} width="20" height="20" />
        <TextInput style={styles.input} placeholder="Поиск" placeholderTextColor={COLORS.grey1} />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.4}>
        <SignInIcon />
      </TouchableOpacity>
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
    elevation: 3,
    zIndex: 2,
  },
  headerWithShadow: {
    shadowColor: COLORS.black1,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  inputContainer: {
    flexGrow: 1,
    height: 32,
    maxWidth: width - 88,
  },
  input: {
    backgroundColor: COLORS.grey3,
    borderRadius: 8,
    paddingRight: 8,
    paddingLeft: 40,
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
  button: {
    padding: 4,
    marginLeft: 24,
  },
});

export default Header;
