import { Animated, StyleSheet, Text } from 'react-native';

import Cookie from '@/components/Icon/Cookie';
import Search from '@/components/Icon/Search';

import { HEIGHTS, scale } from '@/styles/dimensions';

export default function Header() {
  return (
    <>
      <Cookie onPressHandler={() => alert('press cookie')} style={{ ...styles.headerIcon, ...styles.headerLeft }} />
      <Search onPressHandler={() => alert('press search')} style={{ ...styles.headerIcon, ...styles.headerRight }} />
      <Animated.View style={styles.header}>
        <Text>인기순</Text>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 3,
    position: 'absolute',
    width: '100%',
    height: HEIGHTS.HEADER,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: scale(16),
    backgroundColor: '#fff',
  },
  headerIcon: {
    zIndex: 4,
    position: 'absolute',
    height: HEIGHTS.HEADER,
    justifyContent: 'flex-end',
    padding: scale(12),
  },
  headerLeft: {
    left: 0,
  },
  headerRight: {
    right: 0,
  },
});
