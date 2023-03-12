/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { RootStackParamList } from '@/types/navigation';
import WebtoonNavigator from '@/navigations/WebtoonNavigator';
import MyScreen from '@/screens/My';

import Search from '@/components/Icon/Search';
import { HEIGHTS, scale } from '@/styles/dimensions';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={WebtoonNavigator}
        options={{
          title: '웹툰',
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name={focused ? 'calendar-day' : 'calendar'} size={24} color={focused ? 'green' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="MyScreen"
        component={MyScreen}
        options={{
          title: 'My',
          headerStyle: { borderBottomWidth: 1, height: HEIGHTS.HEADER, borderBottomColor: 'lightgray' },
          headerTitleAlign: 'left',
          headerRight: () => <Search style={styles.search} onPressHandler={() => alert('press search')} />,
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <AntDesign name={focused ? 'smile-circle' : 'smileo'} size={24} color={focused ? 'green' : 'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  search: { paddingRight: scale(12) },
});
