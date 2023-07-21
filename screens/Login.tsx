import { useEffect } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import {
  TextInput,
  Button as MuiButton,
  TouchableRipple,
  Text,
} from 'react-native-paper'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Ionicons } from '@expo/vector-icons'
import { useAppTheme } from '../theme'
import { useAppNavigation } from '../navigation'

export default function Login() {
  const theme = useAppTheme()

  console.log('THEME', theme)

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email required'),
    password: yup.string().required('Password required'),
  })

  const navigation = useAppNavigation()

  const styles = StyleSheet.create({
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

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  useEffect(() => {
    console.log('FORMIK', formik.errors)
  }, [formik])

  return (
    <View style={styles.container}>
      <Ionicons
        name='person-circle-outline'
        size={60}
        color='black'
        style={styles.icon}
      />
      <>
        <View style={styles.input}>
          <TextInput
            mode='outlined'
            label='Email'
            error={Boolean(formik.errors.email)}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
          />

          <Text
            style={{
              ...styles.errorText,
              opacity: formik.errors.email ? 1 : 0,
            }}
          >
            {formik.errors.email || ' '}
          </Text>
        </View>
        <View>
          <TextInput
            mode='outlined'
            label='Password'
            secureTextEntry
            error={Boolean(formik.errors.password)}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />

          <Text
            style={{
              ...styles.errorText,
              opacity: formik.errors.password ? 1 : 0,
            }}
          >
            {formik.errors.password || ' '}
          </Text>

          <MuiButton
            style={styles.submitBtn}
            onPress={formik.handleSubmit}
            mode='contained'
            type='submit'
            // title='Submit'
          >
            Submit
          </MuiButton>
        </View>
      </>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText} variant='bodySmall'>
          Or
        </Text>
        <View style={styles.divider} />
      </View>

      <TouchableRipple style={styles.googleBtn}>
        <View style={styles.googleBtnText}>
          <Image
            style={{
              margin: 0,
              height: 20,
              width: 20,
              marginRight: theme.spacing[1],
            }}
            source={require('../assets/images/google_icon.png')}
          />
          <Text variant='titleSmall'>Sign in with google</Text>
        </View>
      </TouchableRipple>

      <View style={styles.register}>
        <Text style={styles.registerText} variant='bodySmall'>
          Don't have an account?
        </Text>
        <TouchableRipple onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link} variant='bodySmall'>
            Register
          </Text>
        </TouchableRipple>
      </View>
    </View>
  )
}
