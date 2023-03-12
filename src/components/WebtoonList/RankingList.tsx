import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import { scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

// 대략적인 구조
export default function RankingList() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>🫶 여성 독자님들이 이번 주 가장 많이 본 New 추천완결!</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(9)}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <PressableNavigateDetail item={item} from="WebtoonScreen">
              <View style={styles.card}>
                <Card cardData={item} cardStyle={{ imageSize: 'medium' }} ranking={index + 1} />
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
