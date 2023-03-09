import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type WebtoonStackParamList = {
  WebtoonScreen: undefined;
  DetailScreen: {
    id: number;
    title: string;
  };
};

export type RootStackParamList = {
  HomeScreen: WebtoonStackParamList;
  MyScreen: undefined;
};

export type DetailScreenProps = NativeStackScreenProps<WebtoonStackParamList, 'DetailScreen'>;
