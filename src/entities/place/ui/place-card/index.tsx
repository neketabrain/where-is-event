import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle, TouchableWithoutFeedback } from 'react-native';

import { Colors } from 'shared/config';
import { Icons } from 'shared/ui';

type PlaceCardProps = {
  // data: Place; TODO: Указать тип
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

// TODO: Рендерить данные из пропсов
const PlaceCard: React.VFC<PlaceCardProps> = (props) => {
  const { style, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.ratingContainer}>
          <Icons.StarIcon width={20} height={20} fill={Colors.orange1} />
          <Text style={styles.rating}>5.0</Text>
        </View>

        <View style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            Common place
          </Text>
          <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
            Уютная квартира с открытой кухней и с коктейлями в банках
          </Text>
          <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
            Красноярск, ул. Карла Маркса, 96
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white1,
    borderRadius: 8,
    shadowColor: Colors.black1,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  image: {
    width: '100%',
    height: 215,
    backgroundColor: Colors.grey1,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  info: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 20,
    color: Colors.black2,
    fontFamily: 'Montserrat-Bold',
  },
  description: {
    fontSize: 16,
    color: Colors.grey2,
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
  },
  address: {
    fontSize: 14,
    color: Colors.black2,
    fontFamily: 'Roboto-Regular',
    marginTop: 16,
  },
  ratingContainer: {
    width: 64,
    position: 'absolute',
    top: 16,
    right: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    color: Colors.white2,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginLeft: 2,
    lineHeight: 20,
  },
});

export default PlaceCard;
