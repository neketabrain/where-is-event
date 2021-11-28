import { TypedNavigator, StackNavigationState, ParamListBase } from '@react-navigation/core';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigatorProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { COLORS } from 'shared/config';

import * as Auth from './auth';
import { EventInfo } from './event-info';
import { PlaceInfo } from './place-info';
import * as Profile from './profile';

type NavigationStackType<T extends ParamListBase> = TypedNavigator<
  T,
  StackNavigationState<T>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  (props: NativeStackNavigatorProps) => JSX.Element
>;

function createBaseStackScreen<T extends BaseStackParamList>(
  NavigationStack: NavigationStackType<T>,
  isAuthorized?: boolean,
) {
  return (
    <>
      <NavigationStack.Screen name="EventInfo" component={EventInfo} />
      <NavigationStack.Screen name="PlaceInfo" component={PlaceInfo} />

      {!isAuthorized && (
        <>
          <NavigationStack.Screen name="Auth" component={Auth.Main} />
          <NavigationStack.Screen name="SignIn" component={Auth.SignIn} />
          <NavigationStack.Screen name="SignUp" component={Auth.SignUp} />
          <NavigationStack.Screen name="ResetPassword" component={Auth.ResetPassword} />
        </>
      )}

      {isAuthorized && (
        <>
          <NavigationStack.Screen name="Profile" component={Profile.Edit} />
          <NavigationStack.Screen name="EditEmail" component={Profile.ChangeEmail} />
        </>
      )}
    </>
  );
}

function createTabIcon(Icon: React.VFC<SvgProps>) {
  return (props: { focused: boolean }) => {
    return <Icon fill={props.focused ? COLORS.blue1 : COLORS.black2} />;
  };
}

function createTabLabel(label: string) {
  return (props: { focused: boolean }) => {
    return <Text style={[styles.tabLabel, !!props.focused && styles.tabActiveLabel]}>{label}</Text>;
  };
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 10,
    color: COLORS.black2,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop: 2,
  },
  tabActiveLabel: {
    color: COLORS.blue1,
  },
});

export { createBaseStackScreen, createTabIcon, createTabLabel };
