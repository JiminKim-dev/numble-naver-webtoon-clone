import { useRef } from 'react';
import { Animated, FlatList, Pressable, StyleSheet, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import DetailHeader from '@/components/Header/DetailHeader';
import Card from '@/components/Card';
import { HEIGHTS, scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

export default function DetailScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList | null>(null);

  const arrowButtonActive = scrollY.interpolate({
    inputRange: [0, HEIGHTS.WINDOW / 6],
    outputRange: [0, 0.5],
  });

  return (
    <View style={styles.container}>
      <DetailHeader />

      <Animated.FlatList
        ref={flatListRef}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        contentContainerStyle={styles.FlatListContainer}
        data={makeMockWebtoonList(20).reverse()}
        keyExtractor={(item) => item.mastrId.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Card
              cardData={item}
              cardStyle={{ imageSize: 'tiny', direction: 'horizontal' }}
              episode={makeMockWebtoonList(20).length - index}
            />
          </View>
        )}
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
  FlatListContainer: { backgroundColor: '#fff' },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: scale(8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    bottom: scale(40),
    right: scale(20),
  },
});
