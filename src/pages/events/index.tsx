import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { EventCard } from 'entities/event';
import { Colors } from 'shared/config';
import { Title, IconButton, Icons } from 'shared/ui';

const Events: React.VFC<NativeStackScreenProps<RootStackParamList>> = () => {
  const ref = useRef<FlatList>(null);
  useScrollToTop(ref);

  return (
    <FlatList
      ref={ref}
      contentContainerStyle={styles.content}
      ListHeaderComponentStyle={styles.header}
      ListHeaderComponent={
        <View style={styles.titleContainer}>
          <Title>События</Title>
          <IconButton variant="secondary" Icon={Icons.FiltersIcon} />
        </View>
      }
      // TODO: Указать данные из стора
      data={[1, 2, 3, 4, 5]}
      keyExtractor={(item) => `${item}`}
      renderItem={() => <EventCard style={styles.card} onPress={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 60,
    backgroundColor: Colors.white2,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: Colors.white1,
    shadowColor: Colors.black1,
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    marginHorizontal: 16,
    marginTop: 40,
  },
});

export default Events;
