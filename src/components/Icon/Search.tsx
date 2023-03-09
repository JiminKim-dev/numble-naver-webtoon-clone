import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IconTypes } from '@/components/Icon/types';

export default function Search({ onPressHandler, size = 24, color = 'black', style }: IconTypes) {
  return (
    <Pressable onPress={onPressHandler} style={style}>
      <AntDesign name="search1" size={size} color={color} />
    </Pressable>
  );
}
