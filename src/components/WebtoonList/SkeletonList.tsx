import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CARD_SIZE, HEIGHTS, scale } from '@/styles/dimensions';

const SkeletonCard = () => (
  <View style={styles.box}>
    <View style={styles.image} />
    <View style={styles.textWapper}>
      <View style={styles.title} />
      <View style={styles.writer} />
    </View>
  </View>
);

function SkeletonList() {
  const emptyList = Array.from({ length: 9 }, (_, index) => index);
  const renderItem = useCallback(SkeletonCard, []);
  const keyExtractor = useCallback((item: number) => `skeleton-${item.toString()}`, []);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={emptyList}
      numColumns={3}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

export default React.memo(SkeletonList);

const styles = StyleSheet.create({
  container: {
    paddingTop: HEIGHTS.TAB_BAR + HEIGHTS.MAIN_BANNER,
    paddingHorizontal: scale(4),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    margin: scale(4),
  },
  image: {
    width: CARD_SIZE.WIDTH.large,
    height: CARD_SIZE.HEIGHTS.large,
    borderRadius: scale(8),
    backgroundColor: 'lightgray',
  },
  textWapper: {
    marginTop: scale(4),
  },
  title: {
    height: scale(14),
    borderRadius: scale(4),
    backgroundColor: 'lightgray',
  },
  writer: {
    marginTop: scale(1),
    width: '60%',
    height: scale(10),
    borderRadius: scale(4),
    backgroundColor: 'lightgray',
  },
});
