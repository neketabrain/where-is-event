import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { PlaceCard } from 'entities/place';
import { COLORS } from 'shared/config';
import { Title, IconButton, Icons } from 'shared/ui';

const Places: React.VFC<NativeStackScreenProps<RootStackParamList>> = () => {
  const ref = useRef<FlatList>(null);
  useScrollToTop(ref);

  return (
    <FlatList
      ref={ref}
      contentContainerStyle={styles.content}
      ListHeaderComponentStyle={styles.header}
      ListHeaderComponent={
        <View style={styles.titleContainer}>
          <Title>Заведения</Title>
          <IconButton variant="secondary" Icon={Icons.FiltersIcon} />
        </View>
      }
      // TODO: Указать данные из стора
      data={[1, 2, 3, 4, 5]}
      keyExtractor={(item) => `${item}`}
      renderItem={() => <PlaceCard style={styles.card} onPress={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 60,
    backgroundColor: COLORS.white2,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: COLORS.white1,
    shadowColor: COLORS.black1,
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

export { Places };
