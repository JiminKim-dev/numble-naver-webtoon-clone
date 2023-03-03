/* eslint-disable react/no-unstable-nested-components */
import { Pressable, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import WebtoonScreen from '@/screens/Webtoon';
import MyScreen from '@/screens/My';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="웹툰"
        component={WebtoonScreen}
        options={{
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: 'transparent',
          headerLeft: Cookie,
          headerRight: Search,
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
          headerRight: Search,
          tabBarIcon: ({ focused }) => <AntDesign name={focused ? 'smile-circle' : 'smileo'} size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

function Cookie() {
  return (
    <View>
      <Pressable>
        <FontAwesome5 name="cookie-bite" size={24} color="black" />
      </Pressable>
    </View>
  );
}

function Search() {
  return (
    <View>
      <Pressable>
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
    </View>
  );
}
