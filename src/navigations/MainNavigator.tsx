/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import Search from '@/components/Icon/Search';

import MyScreen from '@/screens/My';
import WebtoonScreen from '@/screens/Webtoon';
import { scale } from '@/styles/dimensions';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="웹툰"
        component={WebtoonScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name={focused ? 'calendar-day' : 'calendar'} size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          headerTitleAlign: 'left',
          headerRight: () => <Search style={styles.search} onPressHandler={() => alert('press search')} />,
          tabBarIcon: ({ focused }) => <AntDesign name={focused ? 'smile-circle' : 'smileo'} size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  search: { paddingRight: scale(12) },
});
