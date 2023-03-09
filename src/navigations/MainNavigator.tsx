/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { RootStackParamList } from '@/navigations/types';
import WebtoonNavigator from '@/navigations/WebtoonNavigator';
import MyScreen from '@/screens/My';

import Search from '@/components/Icon/Search';
import { scale } from '@/styles/dimensions';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={WebtoonNavigator}
        options={{
          title: '웹툰',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name={focused ? 'calendar-day' : 'calendar'} size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="MyScreen"
        component={MyScreen}
        options={{
          title: 'My',
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
