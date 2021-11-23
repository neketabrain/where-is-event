import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import { viewerModel } from 'entities/viewer';
import { COLORS } from 'shared/config';
import { Icons } from 'shared/ui';
import { Header } from 'widgets/header';

import { Events } from './events';
import { createBaseStackScreen, createTabIcon, createTabLabel } from './helpers';
import { Home } from './home';
import { Personal } from './personal';
import { Places } from './places';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const PlacesStack = createNativeStackNavigator<RootStackParamList>();
const EventsStack = createNativeStackNavigator<RootStackParamList>();
const PersonalStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStackScreen: React.VFC = () => {
  const viewer = viewerModel.selectors.useViewer();

  return (
    <HomeStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      {createBaseStackScreen(HomeStack, !!viewer)}
    </HomeStack.Navigator>
  );
};

const PlacesStackScreen: React.VFC = () => {
  const viewer = viewerModel.selectors.useViewer();

  return (
    <PlacesStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Places">
      <PlacesStack.Screen name="Places" component={Places} />
      {createBaseStackScreen(PlacesStack, !!viewer)}
    </PlacesStack.Navigator>
  );
};

const EventsStackScreen: React.VFC = () => {
  const viewer = viewerModel.selectors.useViewer();

  return (
    <EventsStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Events">
      <EventsStack.Screen name="Events" component={Events} />
      {createBaseStackScreen(EventsStack, !!viewer)}
    </EventsStack.Navigator>
  );
};

const PersonalStackScreen: React.VFC = () => {
  const viewer = viewerModel.selectors.useViewer();

  return (
    <PersonalStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Personal">
      <PersonalStack.Screen name="Personal" component={Personal} />
      {createBaseStackScreen(PersonalStack, !!viewer)}
    </PersonalStack.Navigator>
  );
};

const Pages: React.VFC = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.content}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarBadgeStyle: styles.tabBarBadge,
      }}
      initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ tabBarIcon: createTabIcon(Icons.HomeIcon), tabBarLabel: createTabLabel('Главная') }}
      />
      <Tab.Screen
        name="PlacesStack"
        component={PlacesStackScreen}
        options={{ tabBarIcon: createTabIcon(Icons.StoreIcon), tabBarLabel: createTabLabel('Заведения') }}
      />
      <Tab.Screen
        name="EventsStack"
        component={EventsStackScreen}
        options={{ tabBarIcon: createTabIcon(Icons.GlassIcon), tabBarLabel: createTabLabel('События') }}
      />
      <Tab.Screen
        name="PersonalStack"
        component={PersonalStackScreen}
        options={{ tabBarIcon: createTabIcon(Icons.UserIcon), tabBarLabel: createTabLabel('Личное') }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.white1,
  },
  tabBar: {
    paddingBottom: 8,
    paddingTop: 12,
    height: 59,
    backgroundColor: COLORS.white1,
    borderTopWidth: 0.4,
    borderTopColor: COLORS.grey3,
    elevation: 0,
  },
  tabBarBadge: {
    top: -4,
  },
});

export { Pages };
