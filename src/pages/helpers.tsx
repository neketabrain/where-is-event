import { TypedNavigator, ParamListBase, StackNavigationState } from '@react-navigation/core';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigatorProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Colors } from 'shared/config';

import Auth from './auth';
import EventInfo from './event-info';
import PlaceInfo from './place-info';

type NavigationStackType = TypedNavigator<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  (props: NativeStackNavigatorProps) => JSX.Element
>;

export const createBaseStackScreen = (NavigationStack: NavigationStackType) => {
  return (
    <>
      <NavigationStack.Screen name="EventInfo" component={EventInfo} />
      <NavigationStack.Screen name="PlaceInfo" component={PlaceInfo} />
      <NavigationStack.Screen name="Auth" component={Auth} />
    </>
  );
};

export const createTabIcon = (Icon: React.VFC<SvgProps>) => (props: { focused: boolean }) => {
  return <Icon fill={props.focused ? Colors.blue1 : Colors.black2} />;
};

export const createTabLabel = (label: string) => (props: { focused: boolean }) => {
  return <Text style={[styles.tabLabel, !!props.focused && styles.tabActiveLabel]}>{label}</Text>;
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 10,
    color: Colors.black2,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop: 2,
  },
  tabActiveLabel: {
    color: Colors.blue1,
  },
});
