import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { logout } from '../redux/slices/userSlice'

const Drawer = ({ navigation }) => {
  const {
    user: { email },
  } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch

  return (
    <View style={{ padding: 40 }}>
      <Text variant='bodyLarge'>{email}</Text>
      <TouchableOpacity
        style={{}}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text variant='bodyMedium'>Go to profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text variant='bodyMedium'>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Drawer
