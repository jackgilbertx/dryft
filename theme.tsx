import { MD3LightTheme as DefaultTheme, useTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  spacing: [4, 8, 16, 32, 64],
  shadow: '0 0 2px #00000060',
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    surface: '#FFF',
    primary: '#6200ee',
    accent: '#11B5E4',
    border: '#d8d8d8',
    text: '#001021',
    textSecondary: '#5f6367',
    error: '#fc0301',
    disabled: '#BEC6C6',
    placeholder: '#1481BA',
    backdrop: '#001021',
  },
}

export type AppTheme = typeof theme

export const useAppTheme = () => useTheme<AppTheme>()
