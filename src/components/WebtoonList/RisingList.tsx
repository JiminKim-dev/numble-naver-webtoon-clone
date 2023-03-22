import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import NavigateDetailLayout from '@/components/Layout/NavigateDetailLayout';
import SectionLayout from '@/components/Layout/SectionLayout';
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

function RisingList() {
  const renderItem = useCallback(RisingCard, []);
  const keyExtractor = useCallback((item: ResponseItemData) => `section-rising-${item.mastrId.toString()}`, []);

  return (
    <SectionLayout title="📈 지금 인기 급상승 웹툰!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(12)}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={6}
      />
    </SectionLayout>
  );
}

export default React.memo(RisingList);

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
});
