import { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import SectionLayout from '@/components/WebtoonList/SectionLayout';

import { scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const RisingCard = ({ item }: { item: ResponseItemData }) => (
  <PressableNavigateDetail item={item} from="WebtoonScreen">
    <View style={styles.card}>
      <Card cardData={item} cardStyle={{ imageSize: 'tiny' }} />
    </View>
  </PressableNavigateDetail>
);

export default function RisingList() {
  const RenderItem = useCallback(RisingCard, []);

  return (
    <SectionLayout title="📈 지금 인기 급상승 웹툰!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(12)}
        horizontal
        keyExtractor={(item) => `section-rising-${item.mastrId.toString()}`}
        renderItem={RenderItem}
      />
    </SectionLayout>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(6),
  },
});
