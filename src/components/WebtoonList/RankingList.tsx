import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import NavigateDetailLayout from '@/components/Layout/NavigateDetailLayout';
import SectionLayout from '@/components/Layout/SectionLayout';
import ITEM_STYLE from '@/styles/flatListItem';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const RankingCard = ({ item, index }: { item: ResponseItemData; index: number }) => (
  <NavigateDetailLayout item={item} from="WebtoonScreen">
    <View style={ITEM_STYLE.RANKING.LAYOUT_STYLE}>
      <Card cardData={item} cardStyle={ITEM_STYLE.RANKING.CARD_STYLE} ranking={index + 1} />
    </View>
  </NavigateDetailLayout>
);

const RankingList = () => {
  const renderItem = useCallback(RankingCard, []);
  const keyExtractor = useCallback((item: ResponseItemData) => `section-ranking-${item.mastrId.toString()}`, []);

  return (
    <SectionLayout title="🫶 여성 독자님들이 이번 주 가장 많이 본 New 추천완결!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(9)}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={4}
      />
    </SectionLayout>
  );
};

export default React.memo(RankingList);

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
});
