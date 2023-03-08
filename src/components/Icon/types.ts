import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface IconTypes {
  onPressHandler: (event: GestureResponderEvent) => void;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
