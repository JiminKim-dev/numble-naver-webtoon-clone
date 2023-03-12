import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailScreenProps, MyScreenProps } from '@/types/navigation';

import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { HEIGHTS, scale } from '@/styles/dimensions';

interface SubscribeState {
  id: number;
  subscribe: boolean;
  notification: boolean;
}

export default function DetailHeader() {
  const detailNavigation = useNavigation<DetailScreenProps['navigation']>();
  const myScreenNavigation = useNavigation<MyScreenProps['navigation']>();
  const {
    params: { from, title, id: paramsId },
  } = useRoute<DetailScreenProps['route']>();

  const backBtnPressHandler = () => {
    const moveMyScreen = () => {
      detailNavigation.pop();
      myScreenNavigation.navigate('MyScreen');
    };

    return from === 'MyScreen' ? moveMyScreen() : detailNavigation.pop();
  };

  const [subscribeState, setSubscribeState] = useState<SubscribeState | null>(null);
  const [checkSubscribeButton, setCheckSubscribeButton] = useState<boolean>(false);
  const [notificationActive, setNotificationActive] = useState<boolean>(false);

  const showNotificationSettings = (id: number) =>
    Alert.alert('', '관심 웹툰 알림설정이 꺼져있어요.\n알림을 켜고 업데이트 소식을 받으시겠어요?', [
      {
        text: 'Cancel',
        onPress: () => setSubscribeState({ id, subscribe: true, notification: false }),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => setSubscribeState({ id, subscribe: true, notification: true }) },
    ]);

  const subscribeBtnPressHandler = (id: number) => {
    if (!subscribeState) {
      setNotificationActive(true);
      setCheckSubscribeButton(true);
      return showNotificationSettings(id);
    }

    if (subscribeState.subscribe) {
      setNotificationActive(false);
      setCheckSubscribeButton(false);
      return setSubscribeState({ ...subscribeState, subscribe: !subscribeState.subscribe, notification: false });
    }

    setNotificationActive(true);
    return setSubscribeState({ ...subscribeState, subscribe: !subscribeState.subscribe, notification: true });
  };

  const notificationBtnPressHandler = () => {
    if (!subscribeState) return;
    // eslint-disable-next-line consistent-return
    return setSubscribeState({ ...subscribeState, notification: !subscribeState.notification });
  };

  const isSubscribe = subscribeState?.subscribe;

  const subscribeButtonName = () => {
    if (isSubscribe) {
      return 'checkcircle';
    }
    if (checkSubscribeButton) {
      return 'pluscircle';
    }
    return 'pluscircleo';
  };

  return (
    <View style={styles.header}>
      <View style={{ ...styles.headerContent, ...styles.contentGap }}>
        <Pressable onPress={backBtnPressHandler}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.contentTitle}>{title}</Text>
      </View>
      <View style={styles.headerContent}>
        <Pressable
          style={{ ...styles.headerContent, ...styles.subscribe, ...styles.contentGap }}
          onPress={() => subscribeBtnPressHandler(paramsId)}
        >
          <AntDesign
            name={subscribeButtonName() as 'pluscircle' | 'checkcircle' | 'pluscircleo'}
            size={20}
            color={isSubscribe || checkSubscribeButton ? 'green' : 'black'}
          />
          <Text>관심</Text>
        </Pressable>
        <Pressable onPress={notificationBtnPressHandler} style={!notificationActive && styles.hide}>
          <MaterialCommunityIcons
            name={subscribeState?.notification ? 'bell' : 'bell-off-outline'}
            size={24}
            color={subscribeState?.notification ? 'orange' : 'black'}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    width: '100%',
    height: HEIGHTS.HEADER,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentGap: {
    gap: scale(4),
  },
  contentTitle: {
    fontSize: scale(16),
  },
  subscribe: {
    paddingRight: scale(12),
  },
  hide: {
    display: 'none',
  },
});
