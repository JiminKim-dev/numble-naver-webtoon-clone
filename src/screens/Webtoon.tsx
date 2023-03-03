import { StyleSheet, Text, View } from 'react-native';

export default function WebtoonScreen() {
  return (
    <View style={styles.container}>
      <Text>Webtoon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcdd2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
