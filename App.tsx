import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import { Provider as PaperProvider } from 'react-native-paper'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'react-native-get-random-values'
import { View, Image } from 'react-native'
import { theme } from './theme'
const logo = require('./assets/images/icon.png')


export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ height: 80, width: 80, borderRadius: '50%' }}
          source={logo}
        />
      </View>
    )
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
    )
  }
}
