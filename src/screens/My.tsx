import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenProps } from '@/types/navigation';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '@/components/Card';
import { scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

export default function MyScreen() {
  const navigation = useNavigation<DetailScreenProps['navigation']>();

  return (
    <FlatList
      contentContainerStyle={styles.FlatListContainer}
      data={makeMockWebtoonList(13)}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() =>
              navigation.navigate('DetailScreen', { id: Number(item.mastrId), title: item.title, from: 'MyScreen' })
            }
          >
            <Card cardData={item} cardStyle={{ imageSize: 'tiny', direction: 'horizontal' }} />
          </Pressable>
          <Pressable style={{}} onPress={() => {}}>
            <MaterialCommunityIcons name="bell" size={24} color="green" />
          </Pressable>
        </View>
      )}
    />
  );
}

export const styles = StyleSheet.create({
  FlatListContainer: { backgroundColor: '#fff' },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: scale(8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
