import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from 'shared/config';
import { Button, Title, IconButton, Icons } from 'shared/ui';

const Main: React.VFC<NativeStackScreenProps<RootStackParamList>> = (props) => {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Title style={styles.title}>Where's Event</Title>
      <Text style={styles.description}>
        Не знаете куда сходить? Найдите наиболее интересные для вас события в вашем городе и поделитесь ими с друзьями
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('SignIn')} label="Войти через E-mail" />
        <Button
          onPress={() => navigation.navigate('SignUp')}
          label="Создать аккаунт"
          variant="secondary"
          style={styles.signUp}
        />

        <View style={[styles.row, styles.socialBlock]}>
          <View>
            <Text style={styles.socialText}>Или войдите через</Text>
            <Text style={styles.socialDescription}>VK, Instagram</Text>
          </View>
          <View style={styles.row}>
            <IconButton
              Icon={Icons.VKIcon}
              style={styles.iconButton}
              variant="secondary"
              accessibilityLabel="Войти через VK"
            />
            <IconButton
              Icon={Icons.InstagramIcon}
              style={styles.iconButton}
              variant="secondary"
              accessibilityLabel="Войти через Instagram"
            />
          </View>
        </View>
      </View>
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
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.grey1,
    marginTop: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    display: 'flex',
  },
  socialBlock: {
    marginTop: 32,
    justifyContent: 'space-between',
  },
  socialText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.black2,
  },
  socialDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: Colors.black2,
    marginTop: 4,
  },
  iconButton: {
    marginLeft: 20,
  },
  signUp: {
    marginTop: 16,
  },
});

export default Main;
