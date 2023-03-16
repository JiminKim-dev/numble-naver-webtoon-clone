import { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import SectionLayout from '@/components/WebtoonList/SectionLayout';

import { scale, WIDTHS } from '@/styles/dimensions';

import { makeMockWebtoonList, makeMockWebtoonGridList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const RecommendCard = (item: ResponseItemData) => {
  const { mastrId } = item;

  return (
    <PressableNavigateDetail item={item} from="WebtoonScreen" key={mastrId}>
      <View style={styles.card}>
        <Card cardData={item} cardStyle={{ imageSize: 'small', direction: 'horizontal' }} />
      </View>
    </PressableNavigateDetail>
  );
};

export default function RecommendList() {
  return (
    <SectionLayout title="❗️ 최신 이야기를 놓치고 계신 것 같아요!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonGridList(makeMockWebtoonList(17), 3)}
        horizontal
        keyExtractor={(item) => `section-new-${item[0].mastrId.toString()}`}
        renderItem={useCallback(
          ({ item: items }) => (
            <View style={styles.card}>{items.map(RecommendCard)}</View>
          ),
          [],
        )}
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
    width: WIDTHS.WINDOW * 0.65,
  },
});
