import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from '@/navigations/MainNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}
