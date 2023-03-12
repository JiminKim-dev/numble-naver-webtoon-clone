import { scale, WIDTHS } from '@/styles/dimensions';
import { makeMockWebtoonList, makeMockWebtoonGridList } from '@/utils/mockWebtoonList';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../Card';
import PressableNavigateDetail from '../PressableNavigateDetail';

export default function RecommendList() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>❗️ 최신 이야기를 놓치고 계신 것 같아요!</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonGridList(makeMockWebtoonList(17), 3)}
        horizontal
        renderItem={({ item: items }) => (
          <View style={styles.card}>
            {items.map((item) => (
              <View style={styles.card}>
                <PressableNavigateDetail item={item} from="WebtoonScreen">
                  <Card cardData={item} cardStyle={{ imageSize: 'small', direction: 'horizontal' }} />
                </PressableNavigateDetail>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: scale(8),
  },
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(6),
    width: WIDTHS.WINDOW * 0.65,
  },
  wrapper: { width: '80%' },
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
