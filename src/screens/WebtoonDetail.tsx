import { StyleSheet, Text, View } from 'react-native';
import { DetailScreenProps } from '@/navigations/types';
import DetailHeader from '@/components/Header/DetailHeader';

export default function DetailScreen({ route }: DetailScreenProps) {
  const { id, title } = route.params;

  return (
    <View style={styles.container}>
      <DetailHeader />
      <View style={styles.item}>
        <Text>
          웹툰 상세 id: {id}, title: {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
});
