import { DetailScreenProps } from '@/navigations/types';
import { Text, View } from 'react-native';

export default function DetailScreen({ route }: DetailScreenProps) {
  const { id, title } = route.params;

  return (
    <View>
      <Text>
        웹툰 상세 id: {id}, title: {title}
      </Text>
    </View>
  );
}
