/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';

import Header from '@/components/Header/WebtoonHeader';
import MainBanner from '@/components/Banner/MainBanner';

import { scale, WIDTHS } from '@/styles/dimensions';
import { useNavigation } from '@react-navigation/native';
import { DetailScreenProps } from '@/navigations/types';

interface RouteType {
  id: number;
  key: 'new' | 'daily' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' | 'end';
  title: string;
}

const route: RouteType[] = [
  { id: 0, key: 'new', title: '신작' },
  { id: 1, key: 'daily', title: '매일' },
  { id: 2, key: 'mon', title: '월' },
  { id: 3, key: 'tue', title: '화' },
  { id: 4, key: 'wed', title: '수' },
  { id: 5, key: 'thu', title: '목' },
  { id: 6, key: 'fri', title: '금' },
  { id: 7, key: 'sat', title: '토' },
  { id: 8, key: 'sun', title: '일' },
  { id: 9, key: 'end', title: '완결' },
];

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState(route);

  const navigation = useNavigation<DetailScreenProps['navigation']>();

  return (
    <View style={styles.container}>
      <Header />
      <MainBanner />

      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.TabBar}
            indicatorStyle={styles.TabBarIndicator}
            labelStyle={styles.TabBarLabel}
            activeColor="green"
            pressColor="transparent"
          />
        )}
        navigationState={{ index, routes }}
        renderScene={(props) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('DetailScreen', { id: 1, title: '웹툰1', from: 'WebtoonScreen' })}
          >
            <Text>{props.route.title} 웹툰</Text>
          </Pressable>
        )} // 추후 다른 컴포넌트로 교체
        onIndexChange={setIndex}
        initialLayout={{ width: WIDTHS.WINDOW }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  TabBar: {
    zIndex: 2,
    backgroundColor: '#fff',
  },
  TabBarView: {
    top: 0,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
  },
  TabBarIndicator: {
    backgroundColor: 'green',
  },
  TabBarLabel: {
    color: 'black',
    margin: 0,
    fontSize: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTHS.WINDOW - scale(12) * 2,
    height: scale(1000),
    backgroundColor: 'lightgray',
    marginHorizontal: scale(12),
  },
});
