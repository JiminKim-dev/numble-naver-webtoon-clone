import React, { useCallback, useEffect } from 'react';
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

const MainWebtoonCard = ({ item }: { item: ResponseItemData }) => (
  <NavigateDetailLayout item={item} from="WebtoonScreen">
    <View style={ITEM_STYLE.MAIN.LAYOUT_STYLE}>
      <Card cardData={item} cardStyle={ITEM_STYLE.MAIN.CARD_STYLE} />
    </View>
  </NavigateDetailLayout>
);

const WebtoonListFooterComponent = () => (
  <>
    <RisingList />
    <RankingList />
    <RecommendList />
  </>
);

function WebtoonList({ category, scrollY }: { category: string; scrollY: Animated.Value }) {
  const renderItem = useCallback(MainWebtoonCard, []);
  const keyExtractor = useCallback((item: ResponseItemData) => `${category}-main-${item.mastrId.toString()}`, []);
  const randerListFooterComponent = useCallback(WebtoonListFooterComponent, []);

  return (
    <Animated.FlatList
      contentContainerStyle={{
        ...styles.container,
        ...{ paddingTop: HEIGHTS.TAB_BAR + HEIGHTS.MAIN_BANNER },
      }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      data={makeMockWebtoonList(11)}
      numColumns={3}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListFooterComponent={randerListFooterComponent}
      initialNumToRender={9}
    />
  );
}

export default React.memo(WebtoonList);

const styles = StyleSheet.create({
  container: {
    paddingBottom: HEIGHTS.BOTTOM_BANNER,
    paddingHorizontal: scale(4),
  },
});
