import { Animated, LayoutRectangle, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import RankingList from '@/components/WebtoonList/RankingList';
import RisingList from '@/components/WebtoonList/RisingList';
import RecommendList from '@/components/WebtoonList/RecommendList';

import { HEIGHTS, scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

// 대략적인 구조
export default function WebtoonList({
  category,
  scrollY,
  tabBarLayoutSize,
}: {
  category: string;
  scrollY: Animated.Value;
  tabBarLayoutSize: LayoutRectangle;
}) {
  return (
    <Animated.FlatList
      contentContainerStyle={{
        ...styles.container,
        ...{ paddingTop: tabBarLayoutSize.height + HEIGHTS.MAIN_BANNER },
      }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      data={makeMockWebtoonList(11)}
      numColumns={3}
      keyExtractor={(item) => item.mastrId.toString()}
      renderItem={({ item }) => (
        <PressableNavigateDetail item={item} from="WebtoonScreen">
          <View style={styles.card}>
            <Card cardData={item} cardStyle={{ imageSize: 'large' }} />
          </View>
        </PressableNavigateDetail>
      )}
      ListFooterComponent={
        <>
          <RisingList />
          <RankingList />
          <RecommendList />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: HEIGHTS.BOTTOM_BANNER,
    paddingHorizontal: scale(4),
  },
  card: {
    margin: scale(4),
  },
});
