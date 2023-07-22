import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getReminders } from '../redux/slices/reminderSlice'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { RootState } from '../redux/store'
import { ActivityIndicator } from 'react-native-paper'
import { useAppTheme } from '../theme'
import { getUser } from '../redux/slices/userSlice'

// const Reminders = (props: { title: string; subTitle: string }) => {
//   const { title, subTitle } = props

//   return (
//     <View style={styles.reminderContainer}>
//       <Text style={styles.reminderHeader}>{title}</Text>
//       <Text style={styles.text}>{subTitle}</Text>
//       <View style={styles.divider} />
//     </View>
//   );
// };

// @ts-ignore
const Home = ({ navigation }) => {
  const theme = useAppTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  })

  const dispatch = useAppDispatch()
  const { reminders, loading, error } = useSelector(
    (state: RootState) => state.reminders
  )

  useEffect(() => {
    console.log(navigation)

    // dispatch(getReminders())
    dispatch(getUser())
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={styles.title}>Home</Text>
        </View>
      )}
    </ScrollView>
  )
}

export default Home
