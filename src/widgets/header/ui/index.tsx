import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { COLORS } from 'shared/config';
import { SignInIcon, SearchIcon } from 'shared/ui/icons/';

const width = Dimensions.get('window').width;

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <SearchIcon style={styles.searchIcon} fill={COLORS.black2} />
        <TextInput style={styles.input} placeholder="Поиск" placeholderTextColor="#86868B" />
      </View>

      <TouchableOpacity style={styles.button}>
        <SignInIcon fill={COLORS.black2} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white1,
    height: 44,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: COLORS.black1,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  inputContainer: {
    flexGrow: 1,
    height: 36,
    maxWidth: width - 96,
  },
  input: {
    backgroundColor: '#D3D4DE',
    borderRadius: 8,
    paddingRight: 8,
    paddingLeft: 40,
    height: '100%',
    fontSize: 16,
    color: COLORS.black2,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 8,
    left: 12,
  },
  button: {
    padding: 8,
    marginLeft: 24,
  },
});

export default Header;
