import React, { Fragment } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, TouchableOpacity, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Colors } from 'shared/config';

import { ChevronRightIcon } from '../icons';

type MenuProps = {
  items: Array<{
    label: string;
    onPress: () => void;
    Icon: React.VFC<SvgProps>;
  }>;
  style?: StyleProp<ViewStyle>;
};

const Menu: React.VFC<MenuProps> = (props) => {
  const { style, items } = props;

  return (
    <View style={style}>
      {items.map(({ label, onPress, Icon }) => (
        <Fragment key={label}>
          <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={styles.menuItem}>
            <Icon width={24} height={24} fill={Colors.black2} />
            <Text style={styles.label}>{label}</Text>
            <ChevronRightIcon width={24} height={24} fill={Colors.grey1} style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.separator} />
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.grey3,
    marginVertical: 8,
  },
  menuItem: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.black2,
    marginLeft: 24,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default Menu;
