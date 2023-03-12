/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, LayoutRectangle, LayoutChangeEvent, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';

import Header from '@/components/Header/WebtoonHeader';
import MainBanner from '@/components/Banner/MainBanner';
import WebtoonList from '@/components/WebtoonList';

import { HEIGHTS, WIDTHS } from '@/styles/dimensions';

import useOnLayout from '@/hooks/useLayout';

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

  const [layoutSize, onLayout] = useOnLayout();

  const scrollY = useRef(new Animated.Value(0)).current;
  const bannerTranslateY = scrollY.interpolate({
    inputRange: [0, HEIGHTS.MAIN_BANNER],
    outputRange: [0, -HEIGHTS.MAIN_BANNER],
    extrapolate: 'clamp',
  });

  const tabBarTranslateY = scrollY.interpolate({
    inputRange: [0, HEIGHTS.MAIN_BANNER - HEIGHTS.HEADER],
    outputRange: [HEIGHTS.MAIN_BANNER, HEIGHTS.HEADER],
    extrapolate: 'clamp',
  });

  const footerTranslateY = scrollY.interpolate({
    inputRange: [0, HEIGHTS.BOTTOM_BANNER / 10],
    outputRange: [HEIGHTS.BOTTOM_BANNER, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    scrollY.setValue(0);
  }, [index]);

  return (
    <View style={styles.container}>
      <Header scrollY={scrollY} />

      <Animated.View style={[styles.mainBannerContainer, { transform: [{ translateY: bannerTranslateY }] }]}>
        <MainBanner />
      </Animated.View>

      <TabView
        renderTabBar={(props) => (
          <Animated.View
            style={[styles.TabBarView, { transform: [{ translateY: tabBarTranslateY }] }]}
            // eslint-disable-next-line no-unused-vars
            onLayout={onLayout as (e: LayoutChangeEvent) => void}
          >
            <TabBar
              {...props}
              style={styles.TabBar}
              indicatorStyle={styles.TabBarIndicator}
              labelStyle={styles.TabBarLabel}
              activeColor="green"
              pressColor="transparent"
            />
          </Animated.View>
        )}
        navigationState={{ index, routes }}
        renderScene={(props) => (
          <WebtoonList category={props.route.key} scrollY={scrollY} tabBarLayoutSize={layoutSize as LayoutRectangle} />
        )}
        onIndexChange={setIndex}
        initialLayout={{ width: WIDTHS.WINDOW }}
      />

      <Animated.View style={[styles.bottomBanner, { transform: [{ translateY: footerTranslateY }] }]}>
        <Text>Bottom banner</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  mainBannerContainer: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    width: '100%',
    height: HEIGHTS.MAIN_BANNER,
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
  bottomBanner: {
    zIndex: 2,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: HEIGHTS.BOTTOM_BANNER,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'skyblue',
  },
});
