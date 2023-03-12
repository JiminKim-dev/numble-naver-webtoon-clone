import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenProps } from '@/types/navigation';
import { ResponseItemData } from '@/types/api';

export default function PressableNavigateDetail({
  children,
  item,
  from,
}: {
  children: ReactNode;
  item: ResponseItemData;
  from: 'WebtoonScreen' | 'MyScreen';
}) {
  const navigation = useNavigation<DetailScreenProps['navigation']>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('DetailScreen', {
          id: Number(item.mastrId),
          title: item.title,
          from,
        })
      }
    >
      {children}
    </Pressable>
  );
}
