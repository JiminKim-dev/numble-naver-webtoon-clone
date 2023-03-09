import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WebtoonStackParamList } from '@/navigations/types';

import WebtoonScreen from '@/screens/Webtoon';
import DetailScreen from '@/screens/WebtoonDetail';

const Stack = createNativeStackNavigator<WebtoonStackParamList>();

export default function WebtoonNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WebtoonScreen" component={WebtoonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
