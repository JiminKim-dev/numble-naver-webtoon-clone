import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { ResponseItemData } from '@/types/api';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '@/components/Card';
import PressableNavigateDetail from '@/components/PressableNavigateDetail';
import { scale } from '@/styles/dimensions';
import { makeMockWebtoonList } from '@/utils/mockWebtoonList';

interface NotificationState {
  id: number;
  notification: boolean;
}

export default function MyScreen() {
  const [notificationState, setNotificationState] = useState<NotificationState[]>([]);

  const findNotificationState = (id: string) => notificationState.findIndex((el) => el.id === Number(id));
  const onPressHandler = (item: ResponseItemData) => {
    const findIndex = findNotificationState(item.mastrId);
    if (findIndex < 0) {
      return setNotificationState([...notificationState, { id: Number(item.mastrId), notification: true }]);
    }

    const changeAlramState = [...notificationState].map((state) =>
      state.id === Number(item.mastrId) ? { ...state, notification: !state.notification } : state,
    );

    return setNotificationState(changeAlramState);
  };

  const isAlramActive = (id: string) =>
    notificationState[findNotificationState(id)] && notificationState[findNotificationState(id)].notification;

  return (
    <FlatList
      contentContainerStyle={styles.FlatListContainer}
      data={makeMockWebtoonList(13)}
      keyExtractor={(item) => `my-${item.mastrId.toString()}`}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <PressableNavigateDetail item={item} from="MyScreen">
            <Card cardData={item} cardStyle={{ imageSize: 'tiny', direction: 'horizontal' }} />
          </PressableNavigateDetail>

          <Pressable style={{}} onPress={() => onPressHandler(item)}>
            <MaterialCommunityIcons
              name={isAlramActive(item.mastrId) ? 'bell' : 'bell-off-outline'}
              size={24}
              color={isAlramActive(item.mastrId) ? 'green' : 'black'}
            />
          </Pressable>
        </View>
      )}
    />
  );
}

export const styles = StyleSheet.create({
  FlatListContainer: { backgroundColor: '#fff' },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: scale(8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
