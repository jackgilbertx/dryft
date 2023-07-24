import { StyleSheet } from 'react-native'

export default function (theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: theme.spacing[1],
      paddingHorizontal: theme.spacing[2],
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
    },
    icon: {
      paddingBottom: theme.spacing[6],
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    input: {
      padding: 0,
      marginBottom: theme.spacing[0],
    },
    errorText: {
      fontSize: 10,
      padding: theme.spacing[0],
      color: theme.colors.error,
    },
    submitBtn: {
      boxShadow: theme.shadow,
      marginTop: theme.spacing[2],
    },
    orText: {
      paddingVertical: theme.spacing[2],
      textAlign: 'center',
      paddingHorizontal: theme.spacing[2],
    },
    dividerContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[1],
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.border,
      flex: 1,
    },
    googleBtn: {
      marginBottom: theme.spacing[2],
      borderColor: theme.colors.primary,
      padding: 9,
      borderWidth: 1,
      borderRadius: 24,
    },
    googleBtnText: {
      paddingBottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    register: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    registerText: {
      paddingRight: theme.spacing[0],
    },
    link: {
      color: theme.colors.primary,
    },
  })
}
