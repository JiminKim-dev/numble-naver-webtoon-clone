import { scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../Card';
import PressableNavigateDetail from '../PressableNavigateDetail';

export default function RisingList() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>📈 지금 인기 급상승 웹툰!</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(12)}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <PressableNavigateDetail item={item} from="WebtoonScreen">
              <View style={styles.card}>
                <Card cardData={item} cardStyle={{ imageSize: 'tiny' }} />
              </View>
            </PressableNavigateDetail>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(8),
  },
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(6),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(16),
    paddingHorizontal: scale(4),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  title: {
    fontSize: scale(14),
  },
});
