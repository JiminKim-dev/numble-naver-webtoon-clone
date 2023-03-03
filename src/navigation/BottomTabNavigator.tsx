import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WebtoonScreen from '@/screens/Webtoon';
import MyScreen from '@/screens/My';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="웹툰" component={WebtoonScreen} />
      <Tab.Screen name="My" component={MyScreen} />
    </Tab.Navigator>
  );
}
