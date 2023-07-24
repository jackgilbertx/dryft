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
import { useAppTheme } from '../../theme'
import { useAppNavigation } from '../../navigation'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import getStyles from './styles'
import { login } from '../../redux/slices/userSlice'

export default function Login() {
  const theme = useAppTheme()
  const styles = getStyles(theme)
  const navigation = useAppNavigation()
  const dispatch = useAppDispatch()
  const { loading, error, user } = useAppSelector((state) => state.user)

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .test('valid-email', 'Invalid email', (value) => {
        if (value) {
          const [_, domainPart] = value.split('@')
          return (
            domainPart &&
            domainPart.includes('.') &&
            domainPart.split('.').pop().length > 0
          )
        }
        return true
      })
      .required('Email required'),
    password: yup.string().required('Password required'),
  })

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  })

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
            error={Boolean(formik.submitCount > 0 && formik.errors.email)}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
          />

          <Text
            style={{
              ...styles.errorText,
              opacity: formik.submitCount > 0 && formik.errors.email ? 1 : 0,
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
            error={Boolean(formik.submitCount > 0 && formik.errors.password)}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />

          <Text
            style={{
              ...styles.errorText,
              opacity: formik.submitCount > 0 && formik.errors.password ? 1 : 0,
            }}
          >
            {formik.errors.password || ' '}
          </Text>

          <MuiButton
            style={styles.submitBtn}
            onPress={formik.handleSubmit}
            mode='contained'
            type='submit'
            loading={loading}
            disabled={loading}
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
            source={require('../../assets/images/google_icon.png')}
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
