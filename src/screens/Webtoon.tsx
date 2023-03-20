/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';

import Header from '@/components/Header/WebtoonHeader';
import MainBanner from '@/components/Banner/MainBanner';
import WebtoonList from '@/components/WebtoonList';

import { HEIGHTS, WIDTHS } from '@/styles/dimensions';
import WEBTOON_ROUTE from '@/constants/routes';
import SkeletonList from '@/components/WebtoonList/SkeletonList';

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState(WEBTOON_ROUTE);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <View style={styles.container}>
      <Header scrollY={scrollY} />

      <Animated.View style={[styles.mainBannerContainer, { transform: [{ translateY: bannerTranslateY }] }]}>
        <MainBanner />
      </Animated.View>

      <TabView
        renderTabBar={(props) => (
          <Animated.View style={[styles.TabBarView, { transform: [{ translateY: tabBarTranslateY }] }]}>
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
        renderScene={({ route }) => {
          if (Math.abs(index - routes.indexOf(route)) > 2) {
            return <SkeletonList />;
          }
          return <WebtoonList category={route.key} scrollY={scrollY} />;
        }}
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
    justifyContent: 'center',
    height: HEIGHTS.TAB_BAR,
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
