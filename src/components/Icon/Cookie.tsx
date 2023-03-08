import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { IconTypes } from '@/components/Icon/types';

export default function Cookie({ onPressHandler, size = 24, color = 'black', style }: IconTypes) {
  return (
    <Pressable onPress={onPressHandler} style={style}>
      <FontAwesome5 name="cookie-bite" size={size} color={color} />
    </Pressable>
  );
}
