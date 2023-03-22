import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '@/navigations/MainNavigator';

import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { FontSource } from 'expo-font';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';

/* preload 참고: https://docs.expo.dev/archive/classic-updates/preloading-and-caching-assets/ */

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const cacheFonts = (fonts: string[] | Record<string, FontSource>[]) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // hideAsync가 호출될때까지 app.json의 기본 스플래시 화면이 계속 표시된다.
        SplashScreen.preventAutoHideAsync();

        const fontAssets = cacheFonts([
          FontAwesome5.font,
          Ionicons.font,
          MaterialCommunityIcons.font,
          AntDesign.font,
          Feather.font,
        ]);

        await Promise.all([...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        // 기본 스플래시 화면을 숨긴다.
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}
