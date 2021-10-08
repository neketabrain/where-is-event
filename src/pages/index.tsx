import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from 'shared/config';
import { GlassIcon, HomeIcon, StoreIcon, UserIcon } from 'shared/ui/icons';
import { Header } from 'widgets/header';

import Events from './events';
import { createBaseStackScreen, createTabIcon, createTabLabel } from './helpers';
import Home from './home';
import Personal from './personal';
import Places from './places';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const PlacesStack = createNativeStackNavigator<RootStackParamList>();
const EventsStack = createNativeStackNavigator<RootStackParamList>();
const PersonalStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStackScreen: React.VFC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      {createBaseStackScreen(HomeStack)}
    </HomeStack.Navigator>
  );
};

const PlacesStackScreen: React.VFC = () => {
  return (
    <PlacesStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Places">
      <PlacesStack.Screen name="Places" component={Places} />
      {createBaseStackScreen(PlacesStack)}
    </PlacesStack.Navigator>
  );
};

const EventsStackScreen: React.VFC = () => {
  return (
    <EventsStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Events">
      <EventsStack.Screen name="Events" component={Events} />
      {createBaseStackScreen(EventsStack)}
    </EventsStack.Navigator>
  );
};

const PersonalStackScreen: React.VFC = () => {
  return (
    <PersonalStack.Navigator
      screenOptions={{
        header: Header,
        contentStyle: styles.content,
      }}
      initialRouteName="Personal">
      <PersonalStack.Screen name="Personal" component={Personal} />
      {createBaseStackScreen(PersonalStack)}
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
        options={{ tabBarIcon: createTabIcon(HomeIcon), tabBarLabel: createTabLabel('Главная') }}
      />
      <Tab.Screen
        name="PlacesStack"
        component={PlacesStackScreen}
        options={{ tabBarIcon: createTabIcon(StoreIcon), tabBarLabel: createTabLabel('Заведения') }}
      />
      <Tab.Screen
        name="EventsStack"
        component={EventsStackScreen}
        options={{ tabBarIcon: createTabIcon(GlassIcon), tabBarLabel: createTabLabel('События') }}
      />
      <Tab.Screen
        name="PersonalStack"
        component={PersonalStackScreen}
        options={{ tabBarIcon: createTabIcon(UserIcon), tabBarLabel: createTabLabel('Личное') }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.white1,
  },
  tabBar: {
    paddingBottom: 8,
    paddingTop: 12,
    height: 59,
    backgroundColor: Colors.white1,
    borderTopWidth: 0.4,
    borderTopColor: Colors.grey3,
  },
  tabBarBadge: {
    top: -4,
  },
});

export default Pages;
