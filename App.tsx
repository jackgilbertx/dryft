import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { View, Image } from "react-native";

const logo = require('./assets/images/icon.png')

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    surface: '#FFF',
    primary: '#1CA2EF',
    accent: '#11B5E4',
    border: '#d8d8d8',
    text: '#001021',
    textSecondary: '#5f6367',
    error: '#B71F0E',
    disabled: '#BEC6C6',
    placeholder: '#1481BA',
    backdrop: '#001021',
  },
};

console.log("THEME", theme);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 80, width: 80, borderRadius: 50 }}
          source={logo}
        />
      </View>
    );
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
