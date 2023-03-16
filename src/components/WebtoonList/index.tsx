import { useCallback } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import NavigateDetailLayout from '@/components/Layout/NavigateDetailLayout';
import RankingList from '@/components/WebtoonList/RankingList';
import RisingList from '@/components/WebtoonList/RisingList';
import RecommendList from '@/components/WebtoonList/RecommendList';

import ITEM_STYLE from '@/styles/flatListItem';
import { HEIGHTS, scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const MainWebtoonCard = ({ item }: { item: ResponseItemData }) => {
  return (
    <NavigateDetailLayout item={item} from="WebtoonScreen">
      <View style={ITEM_STYLE.MAIN.LAYOUT_STYLE}>
        <Card cardData={item} cardStyle={ITEM_STYLE.MAIN.CARD_STYLE} />
      </View>
    </NavigateDetailLayout>
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
});
