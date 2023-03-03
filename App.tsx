import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from '@/navigation/BottomTabNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}
