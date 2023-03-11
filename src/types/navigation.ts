import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type WebtoonStackParamList = {
  WebtoonScreen: undefined;
  DetailScreen: {
    id: number;
    title: string;
    from: 'WebtoonScreen' | 'MyScreen';
  };
};

export type RootStackParamList = {
  HomeScreen: WebtoonStackParamList;
  MyScreen: undefined;
};

export type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'MyScreen'>;
export type DetailScreenProps = NativeStackScreenProps<WebtoonStackParamList, 'DetailScreen'>;
