import React from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle, TouchableWithoutFeedback } from 'react-native';

import { Colors } from 'shared/config';

type EventCardProps = {
  // data: Event; TODO: Указать тип
  onPress: () => void;
  square?: boolean;
  style?: StyleProp<ViewStyle>;
};

// TODO: Рендерить данные из пропсов
const EventCard: React.VFC<EventCardProps> = (props) => {
  const { square, style, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, square && styles.squreContainer, style]}>
        <Image
          style={styles.image}
          source={{ uri: 'https://static.tildacdn.com/tild3962-3362-4537-b537-313039383733/__2021-02-16__222229.png' }}
          blurRadius={6}
        />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            Вечер бургеров
          </Text>
          <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
            Весь вечер готовим вкуснейшие бургеры, на которые действует скидка 40%
          </Text>

          <View style={styles.info}>
            <Text style={styles.place} numberOfLines={1} ellipsizeMode="tail">
              Common place
            </Text>
            <Text style={styles.date} numberOfLines={1} ellipsizeMode="tail">
              24.10.2021
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 215,
    borderRadius: 8,
    shadowColor: Colors.black1,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  squreContainer: {
    width: 215,
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(29, 29, 29, 0.8)',
    padding: 24,
    zIndex: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: Colors.white2,
    lineHeight: 24,
    height: 48,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: Colors.grey3,
    marginTop: 14,
    flex: 1,
  },
  place: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: Colors.white2,
  },
  date: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: Colors.grey3,
    marginTop: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: Colors.grey1,
    borderRadius: 8,
  },
  info: {
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default EventCard;
