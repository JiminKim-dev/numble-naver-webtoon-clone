import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import DetailHeader from '@/components/Header/DetailHeader';
import Card from '@/components/Card';
import { scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <DetailHeader />

      <FlatList
        contentContainerStyle={styles.FlatListContainer}
        data={makeMockWebtoonList(20).reverse()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Card
              cardData={item}
              cardStyle={{ imageSize: 'tiny', direction: 'horizontal' }}
              episode={makeMockWebtoonList(20).length - index}
            />
          </View>
        )}
      />
      <Pressable style={styles.arrow} onPress={() => {}}>
        <Feather name="arrow-up" size={32} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  FlatListContainer: { backgroundColor: '#fff' },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: scale(8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    bottom: scale(40),
    right: scale(20),
  },
});
