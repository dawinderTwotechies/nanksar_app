import { StatusBar, useColorScheme } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import "./global.css"
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContextProvider } from './app/context/AppContext';
import { ThemeContext } from '@react-navigation/native';
import { ThemeContextProvider } from './app/context/ThemeContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <ThemeContextProvider>
        <SafeAreaView className='bg-red-200' style={{ flex: 1 }}>
            <AppContextProvider>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <AppNavigator />
            </AppContextProvider>
        </SafeAreaView>
      </ThemeContextProvider>

    </>
  );
}
export default App;
