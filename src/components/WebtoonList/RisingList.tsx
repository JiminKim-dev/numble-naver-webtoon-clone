import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import SectionLayout from '@/components/WebtoonList/SectionLayout';

import { scale } from '@/styles/dimensions';

import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

export default function RisingList() {
  return (
    <SectionLayout title="📈 지금 인기 급상승 웹툰!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonList(12)}
        horizontal
        keyExtractor={(item) => item.mastrId.toString()}
        renderItem={({ item }) => {
          return (
            <PressableNavigateDetail item={item} from="WebtoonScreen">
              <View style={styles.card}>
                <Card cardData={item} cardStyle={{ imageSize: 'tiny' }} />
              </View>
            </PressableNavigateDetail>
          );
        }}
      />
    </SectionLayout>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(6),
  },
});
