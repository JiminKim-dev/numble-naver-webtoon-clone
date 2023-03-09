import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenProps } from '@/navigations/types';

export default function MyScreen() {
  const navigation = useNavigation<DetailScreenProps['navigation']>();

  return (
    <View style={styles.container}>
      <Button
        title="웹툰 상세 페이지로 가기"
        onPress={() => navigation.navigate('DetailScreen', { id: 1, title: '웹툰1' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcdd2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
