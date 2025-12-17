import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { navigationRef } from '../utils/NavigationUtils';

export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}
