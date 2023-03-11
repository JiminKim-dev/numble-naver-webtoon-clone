import { Animated, LayoutRectangle, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HEIGHTS, scale } from '@/styles/dimensions';
import { DetailScreenProps } from '@/navigations/types';

interface DataTypes {
  id: number;
  title: string;
}

// 임시 데이터
const DATA: DataTypes[] = [
  { id: 0, title: 'no title' },
  { id: 1, title: 'no title' },
  { id: 2, title: 'no title' },
  { id: 3, title: 'no title' },
  { id: 4, title: 'no title' },
  { id: 5, title: 'no title' },
  { id: 6, title: 'no title' },
  { id: 7, title: 'no title' },
  { id: 8, title: 'no title' },
  { id: 9, title: 'no title' },
  { id: 10, title: 'no title' },
  { id: 11, title: 'no title' },
  { id: 12, title: 'no title' },
  { id: 13, title: 'no title' },
  { id: 14, title: 'no title' },
];

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
