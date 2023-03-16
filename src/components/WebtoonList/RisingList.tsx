import { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import NavigateDetailLayout from '@/components/NavigateDetailLayout';
import SectionLayout from '@/components/WebtoonList/SectionLayout';
import ITEM_STYLE from '@/styles/flatListItem';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const RisingCard = ({ item }: { item: ResponseItemData }) => (
  <NavigateDetailLayout item={item} from="WebtoonScreen">
    <View style={ITEM_STYLE.RISING.LAYOUT_STYLE}>
      <Card cardData={item} cardStyle={ITEM_STYLE.RISING.CARD_STYLE} />
    </View>
  </NavigateDetailLayout>
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
});
