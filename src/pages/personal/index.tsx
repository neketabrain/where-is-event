import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { viewerModel } from 'entities/viewer';
import { Colors } from 'shared/config';
import { Button, Title } from 'shared/ui';

const Personal: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;
  const isAuthorized = viewerModel.selectors.useAuthorized();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {!isAuthorized && (
        <View style={styles.unathorizedBlock}>
          <Text style={styles.unathorizedText}>Для того, чтобы получить полный доступ необходимо войти в аккаунт</Text>
          <Button label="Войти" style={styles.signIn} onPress={() => navigation.navigate('Auth')} />
        </View>
      )}

      {isAuthorized && <Title>Личное</Title>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
    display: 'flex',
    flexGrow: 1,
  },
  unathorizedBlock: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  unathorizedText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: Colors.grey1,
    textAlign: 'center',
  },
  signIn: {
    marginTop: 32,
  },
});

export default Personal;
