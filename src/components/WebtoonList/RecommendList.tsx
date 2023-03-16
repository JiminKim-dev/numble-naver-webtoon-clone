import { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import SectionLayout from '@/components/WebtoonList/SectionLayout';
import ITEM_STYLE from '@/styles/flatListItem';

import { makeMockWebtoonList, makeMockWebtoonGridList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const RecommendCard = (item: ResponseItemData) => {
  const { mastrId } = item;

  return (
    <PressableNavigateDetail item={item} from="WebtoonScreen" key={mastrId}>
      <View style={ITEM_STYLE.RECOMMEND.LAYOUT_STYLE}>
        <Card cardData={item} cardStyle={ITEM_STYLE.RECOMMEND.CARD_STYLE} />
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
            <View>{items.map(RecommendCard)}</View>
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
});
