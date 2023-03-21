/* eslint-disable react/no-unused-prop-types */
import { useCallback, useRef } from 'react';
import { Animated, FlatList, Pressable, StyleSheet, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import DetailHeader from '@/components/Header/DetailHeader';
import Card from '@/components/Card';
import ITEM_STYLE from '@/styles/flatListItem';
import { HEIGHTS, scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';
import { ResponseItemData } from '@/types/api';

const DetailEpisodeItem = ({ item, index }: { item: ResponseItemData; index: number }) => (
  <View style={ITEM_STYLE.DETAIL.LAYOUT_STYLE}>
    <Card cardData={item} cardStyle={ITEM_STYLE.DETAIL.CARD_STYLE} episode={index} />
  </View>
);

export default function DetailScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList | null>(null);

  const arrowButtonActive = scrollY.interpolate({
    inputRange: [0, HEIGHTS.WINDOW / 6],
    outputRange: [0, 0.5],
  });

  const DATA = makeMockWebtoonList(20);

  const renderItem = useCallback(
    ({ item, index }: { item: ResponseItemData; index: number }) => (
      <DetailEpisodeItem item={item} index={DATA.length - index} />
    ),
    [],
  );
  const keyExtractor = useCallback((item: ResponseItemData) => `detail-${item.mastrId.toString()}`, []);

  return (
    <View style={styles.container}>
      <DetailHeader />

      <Animated.FlatList
        ref={flatListRef}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        contentContainerStyle={styles.FlatListContainer}
        data={DATA.reverse()}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Animated.View style={[styles.arrow, { opacity: arrowButtonActive }]}>
        <Pressable onPress={() => flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })}>
          <Feather name="arrow-up" size={32} color="black" />
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  FlatListContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: scale(8),
    paddingTop: scale(8),
  },
  arrow: {
    position: 'absolute',
    bottom: scale(40),
    right: scale(20),
  },
});
