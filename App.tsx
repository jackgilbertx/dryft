import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import  enableScreens  from 'react-native-reanimated';

// enableScreens();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PaperProvider theme={theme}>
            <Navigation />
            <StatusBar />
          </PaperProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
