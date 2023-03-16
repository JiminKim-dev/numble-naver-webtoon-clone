import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenProps } from '@/types/navigation';
import { ResponseItemData } from '@/types/api';

export default function NavigateDetailLayout({
  children,
  item,
  from,
}: {
  children: ReactNode;
  item: ResponseItemData;
  from: 'WebtoonScreen' | 'MyScreen';
}) {
  const navigation = useNavigation<DetailScreenProps['navigation']>();
  const onPressHandler = () =>
    navigation.navigate('DetailScreen', {
      id: Number(item.mastrId),
      title: item.title,
      from,
    });

  return <Pressable onPress={onPressHandler}>{children}</Pressable>;
}
