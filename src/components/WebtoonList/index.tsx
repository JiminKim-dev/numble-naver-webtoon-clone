import { useCallback } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import RankingList from '@/components/WebtoonList/RankingList';
import RisingList from '@/components/WebtoonList/RisingList';
import RecommendList from '@/components/WebtoonList/RecommendList';

import { HEIGHTS, scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const MainWebtoonCard = ({ item }: { item: ResponseItemData }) => {
  return (
    <PressableNavigateDetail item={item} from="WebtoonScreen">
      <View style={styles.card}>
        <Card cardData={item} cardStyle={{ imageSize: 'large' }} />
      </View>
    </PressableNavigateDetail>
  );
};

export default function WebtoonList({ category, scrollY }: { category: string; scrollY: Animated.Value }) {
  const RanderItem = useCallback(MainWebtoonCard, []);

  return (
    <Animated.FlatList
      contentContainerStyle={{
        ...styles.container,
        ...{ paddingTop: HEIGHTS.TAB_BAR + HEIGHTS.MAIN_BANNER },
      }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      data={makeMockWebtoonList(11)}
      numColumns={3}
      keyExtractor={(item) => `${category}-main-${item.mastrId.toString()}`}
      renderItem={RanderItem}
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
