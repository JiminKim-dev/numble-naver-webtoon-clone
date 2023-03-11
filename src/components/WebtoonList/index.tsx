import { Animated, LayoutRectangle, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenProps } from '@/types/navigation';

import Card from '@/components/Card';
import { HEIGHTS, scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

// 대략적인 구조
export default function WebtoonList({
  category,
  scrollY,
  tabBarLayoutSize,
}: {
  category: string;
  scrollY: Animated.Value;
  tabBarLayoutSize: LayoutRectangle;
}) {
  const navigation = useNavigation<DetailScreenProps['navigation']>();

  return (
    <Animated.FlatList
      contentContainerStyle={{ ...styles.container, ...{ paddingTop: tabBarLayoutSize.height + HEIGHTS.MAIN_BANNER } }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      data={makeMockWebtoonList(11)}
      numColumns={3}
      renderItem={({ item, index }) => (
        <Pressable
          style={styles.card}
          onPress={() =>
            navigation.navigate('DetailScreen', { id: Number(item.mastrId), title: item.title, from: 'WebtoonScreen' })
          }
        >
          <Card cardData={item} cardStyle={{ imageSize: 'large' }} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: HEIGHTS.BOTTOM_BANNER,
    paddingHorizontal: scale(4),
  },
  card: {
    margin: scale(4),
  },
});
