import { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import SectionLayout from '@/components/WebtoonList/SectionLayout';

import { scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const RankingCard = ({ item, index }: { item: ResponseItemData; index: number }) => (
  <PressableNavigateDetail item={item} from="WebtoonScreen">
    <View style={styles.card}>
      <Card cardData={item} cardStyle={{ imageSize: 'medium' }} ranking={index + 1} />
    </View>
  </PressableNavigateDetail>
);

const RankingList = () => {
  const RenderItem = useCallback(RankingCard, []);

  return (
    <SectionLayout title="🫶 여성 독자님들이 이번 주 가장 많이 본 New 추천완결!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(9)}
        horizontal
        keyExtractor={(item) => `section-ranking-${item.mastrId.toString()}`}
        renderItem={RenderItem}
      />
    </SectionLayout>
  );
};

export default RankingList;

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(6),
  },
});
