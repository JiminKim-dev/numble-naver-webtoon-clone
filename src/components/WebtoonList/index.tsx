import { Animated, LayoutRectangle, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HEIGHTS, scale } from '@/styles/dimensions';
import { DetailScreenProps } from '@/types/navigation';

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
      data={DATA}
      numColumns={3}
      renderItem={({ item }) => (
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('DetailScreen', { id: item.id, title: item.title, from: 'WebtoonScreen' })}
        >
          <Text>
            {category}: {item.title}-{item.id}
          </Text>
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
    flex: 1,
    width: scale(150),
    height: scale(150),
    backgroundColor: '#fff',
    margin: scale(4),
  },
});
