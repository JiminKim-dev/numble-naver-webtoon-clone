import { FlatList, StyleSheet, View } from 'react-native';

import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import SectionLayout from '@/components/WebtoonList/SectionLayout';

import { scale, WIDTHS } from '@/styles/dimensions';

import { makeMockWebtoonList, makeMockWebtoonGridList } from '@/utils/mockWebtoonList';

export default function RecommendList() {
  return (
    <SectionLayout title="❗️ 최신 이야기를 놓치고 계신 것 같아요!">
      <FlatList
        style={styles.flatList}
        data={makeMockWebtoonGridList(makeMockWebtoonList(17), 3)}
        horizontal
        keyExtractor={(item) => item[0].mastrId.toString()}
        renderItem={({ item: items }) => (
          <View style={styles.card}>
            {items.map((item) => (
              <View style={styles.card}>
                <PressableNavigateDetail item={item} from="WebtoonScreen">
                  <Card cardData={item} cardStyle={{ imageSize: 'small', direction: 'horizontal' }} />
                </PressableNavigateDetail>
              </View>
            ))}
          </View>
        )}
      />
    </SectionLayout>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(4),
    width: WIDTHS.WINDOW * 0.65,
  },
});
