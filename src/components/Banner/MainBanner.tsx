import { HEIGHTS } from '@/styles/dimensions';
import { Text, StyleSheet, View } from 'react-native';

export default function MainBanner() {
  return (
    <View style={styles.mainBanner}>
      <Text>Main banner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBanner: {
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHTS.MAIN_BANNER,
    backgroundColor: '#ffcdd2',
  },
});
