import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scale } from '@/styles/dimensions';

// 대략적인 구조
export default function SectionLayout({ children, title }: { children: ReactNode; title: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(8),
  },
  flatList: {
    flexDirection: 'row',
  },
  card: {
    margin: scale(6),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(16),
    paddingHorizontal: scale(4),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  title: {
    fontSize: scale(14),
  },
});
