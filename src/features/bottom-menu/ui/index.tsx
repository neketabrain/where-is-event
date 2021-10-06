import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { COLORS } from 'shared/config';
import { BellIcon, GlassIcon, HomeIcon, StoreIcon, UserIcon } from 'shared/ui/icons';

const BottomMenu: React.VFC = () => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuItem} activeOpacity={0.4}>
        <HomeIcon />
        <Text style={styles.text}>Главная</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} activeOpacity={0.4}>
        <StoreIcon />
        <Text style={styles.text}>Заведения</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} activeOpacity={0.4}>
        <GlassIcon />
        <Text style={styles.text}>События</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} activeOpacity={0.4}>
        <BellIcon />
        <Text style={styles.text}>Уведомления</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} activeOpacity={0.4}>
        <UserIcon />
        <Text style={styles.text}>Личное</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    zIndex: 2,
    backgroundColor: COLORS.white1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: COLORS.black1,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -4,
    },
  },
  menuItem: {
    width: 65,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
    color: COLORS.black2,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default BottomMenu;
