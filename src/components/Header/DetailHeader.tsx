import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { DetailScreenProps, MyScreenProps } from '@/types/navigation';
import { HEIGHTS, scale } from '@/styles/dimensions';

export default function DetailHeader() {
  const detailNavigation = useNavigation<DetailScreenProps['navigation']>();
  const myScreenNavigation = useNavigation<MyScreenProps['navigation']>();
  const {
    params: { from, title },
  } = useRoute<DetailScreenProps['route']>();

  const onPressHandler = () => {
    const moveMyScreen = () => {
      detailNavigation.pop();
      myScreenNavigation.navigate('MyScreen');
    };

    return from === 'MyScreen' ? moveMyScreen() : detailNavigation.pop();
  };

  return (
    <View style={styles.header}>
      <View style={{ ...styles.headerContent, ...styles.contentGap }}>
        <Pressable onPress={onPressHandler}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.contentTitle}>{title}</Text>
      </View>
      <View style={styles.headerContent}>
        <Pressable style={{ ...styles.headerContent, ...styles.subscribe }}>
          <EvilIcons name="plus" size={24} color="black" />
          <Text>관심</Text>
        </Pressable>
        <Pressable>
          <MaterialCommunityIcons name="bell-off-outline" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: HEIGHTS.HEADER,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: scale(10),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentGap: {
    gap: scale(8),
  },
  contentTitle: {
    fontSize: scale(16),
  },
  subscribe: {
    paddingRight: scale(12),
  },
});
