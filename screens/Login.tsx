// @ts-ignore
import { useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { TextInput, Button, TouchableRipple, Text } from 'react-native-paper'
import { Formik, useFormik } from 'formik'
import styled from 'styled-components/native'
import * as yup from 'yup'
import { Ionicons } from '@expo/vector-icons'
import { useAppTheme } from '../theme'

export default function Login() {
  const theme = useAppTheme()

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email required'),
    password: yup.string().required('Password required'),
  })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: theme.spacing[2],
      paddingHorizontal: theme.spacing[2],
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
    },
    icon: {
      paddingBottom: theme.spacing[2],
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
      paddingHorizontal: theme.spacing[2] * 2,
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
    },
    googleBtnText: {
      display: 'flex',
      alignItems: 'center',
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

          <Button
            style={styles.submitBtn}
            onPress={formik.handleSubmit}
            mode='contained'
            type='submit'
            // title='Submit'
          >
            Submit
          </Button>
        </View>
      </>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText} variant='bodySmall'>
          Or
        </Text>
        <View style={styles.divider} />
      </View>

      <Button style={styles.googleBtn} mode='outlined'>
        <View style={styles.googleBtnText}>
          <Image
            style={{ height: 20, width: 20, marginRight: theme.spacing[1] }}
            source={require('../assets/images/google_icon.png')}
          />
          Sign in with google
        </View>
      </Button>

      <View style={styles.register}>
        <Text style={styles.registerText} variant='bodySmall'>
          Don't have an account?
        </Text>
        <TouchableRipple>
          <Text style={styles.link} variant='bodySmall'>
            Register
          </Text>
        </TouchableRipple>
      </View>
    </View>
  )
}
