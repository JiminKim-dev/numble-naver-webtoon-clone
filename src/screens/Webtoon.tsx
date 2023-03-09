import { View, StyleSheet } from 'react-native';

import Header from '@/components/Header';
import MainBanner from '@/components/Banner/MainBanner';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <MainBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
